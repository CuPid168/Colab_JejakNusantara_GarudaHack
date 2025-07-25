import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma';
import formidable, { Fields, Files, File } from 'formidable';
import fs from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth/next';
//@ts-ignore
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

async function parseForm(req: NextApiRequest): Promise<{ fields: Fields; files: Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: false,
      uploadDir: path.join(process.cwd(), 'public', 'uploads'),
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filename: (_name, _ext, part) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        return `${unique}${path.extname(part.originalFilename || '')}`;
      },
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all posts with user, likes, upvotes, comments count
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, name: true, image: true, email: true, domisili: true } },
        likes: true,
        upvotes: true,
        comments: true,
      },
    });
    const formatted = posts.map((post: any) => ({
      id: post.id,
      image: post.image,
      location: post.location,
      description: post.description,
      createdAt: post.createdAt,
      user: post.user,
      likesCount: post.likes.length,
      upvotesCount: post.upvotes.length,
      commentsCount: post.comments.length,
    }));
    return res.status(200).json(formatted);
  }

  if (req.method === 'POST') {
    // Auth check
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user?.email) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Ensure uploads dir exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Parse form
    let fields: Fields, files: Files;
    try {
      ({ fields, files } = await parseForm(req));
    } catch (err) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    const location = Array.isArray(fields.location) ? fields.location[0] : fields.location;
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
    let imageFile: File | undefined;
    if (Array.isArray(files?.image)) {
      imageFile = files.image[0];
    } else if (files?.image) {
      imageFile = files.image as File;
    }
    if (!imageFile || !location || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get user
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Save post
    const imagePath = `/uploads/${path.basename(imageFile.filepath)}`;
    const post = await prisma.post.create({
      data: {
        image: imagePath,
        location: String(location),
        description: String(description),
        userId: user.id,
      },
    });

    return res.status(200).json({ success: true, post });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 