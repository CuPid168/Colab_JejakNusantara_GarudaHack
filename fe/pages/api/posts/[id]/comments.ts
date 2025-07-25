import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma';
import { getServerSession } from 'next-auth/next';
//@ts-ignore
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id as string;
  if (req.method === 'GET') {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'asc' },
      include: { user: { select: { id: true, name: true, image: true, domisili: true } } },
    });
    return res.status(200).json(comments);
  }
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user?.email) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing comment text' });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const comment = await prisma.comment.create({
      data: { text, postId, userId: user.id },
      include: { user: { select: { id: true, name: true, image: true, domisili: true } } },
    });
    return res.status(200).json(comment);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 