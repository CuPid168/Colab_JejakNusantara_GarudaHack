"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaThumbsUp, FaArrowUp, FaRegComment } from 'react-icons/fa';
import { Dialog as CommentDialog, DialogTrigger as CommentDialogTrigger, DialogContent as CommentDialogContent, DialogHeader as CommentDialogHeader, DialogTitle as CommentDialogTitle } from "@/components/ui/dialog";

export default function KomunitasPage() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [commentModalPostId, setCommentModalPostId] = useState<string | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [commentText, setCommentText] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentError, setCommentError] = useState("");
  const [likeLoading, setLikeLoading] = useState<string | null>(null);
  const [upvoteLoading, setUpvoteLoading] = useState<string | null>(null);

  // Fetch posts
  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data) ? data : []));
  }, [refresh]);

  // Fetch comments for a post
  const openComments = async (postId: string) => {
    setCommentModalPostId(postId);
    setCommentLoading(true);
    setCommentError("");
    try {
      const res = await fetch(`/api/posts/${postId}/comments`);
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (err) {
      setCommentError("Gagal memuat komentar");
    } finally {
      setCommentLoading(false);
    }
  };

  // Add a comment
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentModalPostId) return;
    setCommentLoading(true);
    setCommentError("");
    try {
      const res = await fetch(`/api/posts/${commentModalPostId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: commentText }),
      });
      if (!res.ok) throw new Error("Gagal menambah komentar");
      const newComment = await res.json();
      setComments(prev => [...prev, newComment]);
      setCommentText("");
      setRefresh(r => r + 1);
    } catch (err) {
      setCommentError("Gagal menambah komentar");
    } finally {
      setCommentLoading(false);
    }
  };

  // Like handler
  const handleLike = async (postId: string) => {
    if (!session) return;
    setLikeLoading(postId);
    try {
      const res = await fetch(`/api/posts/${postId}/like`, { method: "POST" });
      if (!res.ok) throw new Error();
      setRefresh(r => r + 1);
    } finally {
      setLikeLoading(null);
    }
  };

  // Upvote handler
  const handleUpvote = async (postId: string) => {
    if (!session) return;
    setUpvoteLoading(postId);
    try {
      const res = await fetch(`/api/posts/${postId}/upvote`, { method: "POST" });
      if (!res.ok) throw new Error();
      setRefresh(r => r + 1);
    } finally {
      setUpvoteLoading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      if (image) formData.append("image", image);
      formData.append("location", location);
      formData.append("description", description);
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal membuat postingan");
      }
      setOpen(false);
      setImage(null);
      setLocation("");
      setDescription("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setRefresh(r => r + 1);
    } catch (err: any) {
      setError(err.message || "Gagal membuat postingan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="flex flex-1 w-full max-w-7xl mx-auto gap-8 py-10 px-4">
        {/* Timeline (3/4) */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 min-h-[70vh]">
          <h2 className="text-xl font-bold mb-4">Timeline Komunitas</h2>
          {/* Timeline posts will go here */}
          {posts.length === 0 ? (
            <div className="text-gray-400 text-center mt-20">Belum ada postingan.</div>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map(post => (
                <div key={post.id} className="bg-[#f8f9fa] rounded-xl shadow p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src={post.user?.image || `https://i.pravatar.cc/300?u=${post.user?.id}`} alt="User" width={36} height={36} className="rounded-full" />
                    <div>
                      <div className="font-semibold">{post.user?.name || "User"}</div>
                      {post.user?.domisili && (
                        <div className="text-xs text-gray-500">{post.user.domisili}</div>
                      )}
                      <div className="text-xs text-gray-500">{post.location}</div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image src={post.image} alt="Post" width={400} height={300} className="rounded-lg object-cover max-h-72" />
                  </div>
                  <div className="mt-2 text-sm text-gray-700 whitespace-pre-line">{post.description}</div>
                  <div className="flex gap-6 mt-2 text-xs text-gray-500 items-center">
                    <button
                      className={`flex items-center gap-1 ${!session ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#7B4019]'}`}
                      onClick={() => handleLike(post.id)}
                      disabled={!session || likeLoading === post.id}
                      title={!session ? 'Login untuk menyukai' : 'Suka'}
                    >
                      <FaThumbsUp /> {post.likesCount}
                    </button>
                    <button
                      className={`flex items-center gap-1 ${!session ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#FF7D29]'}`}
                      onClick={() => handleUpvote(post.id)}
                      disabled={!session || upvoteLoading === post.id}
                      title={!session ? 'Login untuk upvote' : 'Upvote'}
                    >
                      <FaArrowUp /> {post.upvotesCount}
                    </button>
                    <CommentDialog open={commentModalPostId === post.id} onOpenChange={open => { if (!open) setCommentModalPostId(null); }}>
                      <CommentDialogTrigger asChild>
                        <button
                          className={`flex items-center gap-1 ${!session ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#7B4019]'}`}
                          onClick={() => openComments(post.id)}
                          disabled={!session}
                          title={!session ? 'Login untuk komentar' : 'Komentar'}
                        >
                          <FaRegComment /> {post.commentsCount}
                        </button>
                      </CommentDialogTrigger>
                      <CommentDialogContent className="max-w-lg w-full">
                        <CommentDialogHeader>
                          <CommentDialogTitle>Komentar</CommentDialogTitle>
                        </CommentDialogHeader>
                        {commentLoading ? (
                          <div className="text-center py-6">Memuat...</div>
                        ) : commentError ? (
                          <div className="text-red-500 text-center py-6">{commentError}</div>
                        ) : (
                          <div className="flex flex-col gap-4 max-h-72 overflow-y-auto py-2">
                            {comments.length === 0 ? (
                              <div className="text-gray-400 text-center">Belum ada komentar.</div>
                            ) : comments.map((c, i) => (
                              <div key={i} className="flex gap-3 items-start">
                                <Image src={c.user?.image || `https://i.pravatar.cc/300?u=${c.user?.id}`} alt="User" width={28} height={28} className="rounded-full" />
                                <div>
                                  <div className="font-semibold text-xs">{c.user?.name || 'User'}</div>
                                  {c.user?.domisili && <div className="text-xs text-gray-500">{c.user.domisili}</div>}
                                  <div className="text-xs text-gray-700 mt-1">{c.text}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {session && (
                          <form className="flex gap-2 mt-4" onSubmit={handleAddComment}>
                            <input
                              type="text"
                              value={commentText}
                              onChange={e => setCommentText(e.target.value)}
                              placeholder="Tulis komentar..."
                              className="flex-1 border rounded-full px-4 py-2 text-sm"
                              disabled={commentLoading}
                              maxLength={300}
                              required
                            />
                            <Button type="submit" disabled={commentLoading || !commentText.trim()} className="rounded-full bg-[#7B4019] text-white px-4 py-2">
                              Kirim
                            </Button>
                          </form>
                        )}
                      </CommentDialogContent>
                    </CommentDialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Profile (1/4) */}
        <div className="w-[320px] min-w-[260px] bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          {session && session.user ? (
            <>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-2 border-[#7B4019]">
                <Image src={session.user.image || `https://i.pravatar.cc/300?u=${session?.user.id || session.user.email}`} alt="Profile" width={96} height={96} />
              </div>
              <div className="font-semibold text-lg mb-1">{session.user.name || "Pengguna"}</div>
              <div className="text-sm text-gray-500 mb-4">{typeof session.user.email === 'string' ? session.user.email : '-'}</div>
              {/* User stats */}
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="font-bold text-[#7B4019]">{posts.filter(p => p.user?.email === session?.user?.email).length}</div>
                  <div className="text-xs text-gray-500">Post</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#7B4019]">0</div>
                  <div className="text-xs text-gray-500">Like</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#7B4019]">0</div>
                  <div className="text-xs text-gray-500">Upvote</div>
                </div>
              </div>
              {/* User's posted images gallery */}
              <div className="w-full flex flex-col items-center mb-6">
                <div className="w-full text-sm font-semibold mb-2 text-center">Postingan Anda</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {posts.filter(p => p.user?.email === session?.user?.email).length === 0 ? (
                    <div className="text-xs text-gray-400">Belum ada postingan.</div>
                  ) : (
                    posts.filter(p => p.user?.email === session?.user?.email).map(p => (
                      <div key={p.id} className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                        <Image src={p.image} alt="Post" width={64} height={64} className="object-cover w-full h-full" />
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* Create Post Button */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full h-14 rounded-full bg-gradient-to-r from-[#7B4019] to-[#FF7D29] text-white font-semibold py-2 mt-2 shadow-lg backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)' }}>
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md w-full">
                  <DialogHeader>
                    <DialogTitle>Buat Postingan Baru</DialogTitle>
                  </DialogHeader>
                  <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                    <label className="font-medium">Gambar Budaya</label>
                    <Input
                      type="file"
                      accept="image/*"
                      required
                      ref={fileInputRef}
                      onChange={e => setImage(e.target.files?.[0] || null)}
                    />
                    <label className="font-medium">Lokasi</label>
                    <Input
                      type="text"
                      placeholder="Contoh: Banyuwangi"
                      required
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                    />
                    <label className="font-medium">Deskripsi</label>
                    <textarea
                      placeholder="Deskripsikan budaya..."
                      required
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      className="flex w-full rounded-2xl border border-input bg-background px-5 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:border-primary focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all h-24 resize-none"
                      style={{ borderRadius: '1rem' }}
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit" className="mt-2 bg-[#7B4019] text-white rounded-full" disabled={loading}>
                      {loading ? "Posting..." : "Posting"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <div className="flex flex-col items-center w-full gap-6 pt-2">
              <div className="font-semibold text-lg mb-1">Anda belum login</div>
              <div className="text-sm text-gray-500 mb-4 text-center">Silakan login untuk membuat postingan dan melihat profil Anda.</div>
              <Link href="/login" className="w-full">
                <Button className="w-full h-14 rounded-full bg-gradient-to-r from-[#7B4019] to-[#FF7D29] text-white text-lg font-semibold py-1 shadow-lg backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)' }}>
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
