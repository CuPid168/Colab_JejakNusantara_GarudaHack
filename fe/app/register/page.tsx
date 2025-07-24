"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [domisili, setDomisili] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, domisili, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Registration failed");
    } else {
      setSuccess("Registrasi berhasil! Mengarahkan ke halaman login...");
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9fa] px-4">
      <div className="flex-1 flex flex-col justify-center items-center min-h-[70vh] py-4 md:py-0">
        {/* Left: Form */}
        <div className="w-full max-w-xl z-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Bergabung Sekarang</h2>
            <p className="text-base text-muted-foreground mb-6">Lengkapi formulirnya dan kamu siap menjelajah budaya nusantara!</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Nama"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Domisili"
              value={domisili}
              onChange={e => setDomisili(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <Alert>{error}</Alert>}
            {success && <Alert className="border-green-500 bg-green-50 text-green-700">{success}</Alert>}
            <Button
              type="submit"
              className="w-full text-white rounded-full border-0 py-4 min-h-[56px] text-base font-semibold"
              style={{
                background: 'linear-gradient(276.39deg, #7B4019 27.9%, #D16D2A 124.02%, #E1752E 141.78%)'
              }}
            >
              Daftar
            </Button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-muted-foreground/20" />
            <span className="mx-3 text-muted-foreground text-xs">atau</span>
            <div className="flex-1 h-px bg-muted-foreground/20" />
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full mb-2 rounded-full"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <span className="inline-block align-middle mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z" opacity=".4"></path><path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z"></path><path d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z" opacity=".4"></path><path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z"></path></svg>
            </span>
            Daftar dengan Google
          </Button>
          <div className="mt-6 text-center text-sm">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-primary font-semibold hover:underline">Masuk</Link>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center min-h-[70vh] py-4 md:py-0 md:ml-2">
        <Image
          src="/images/daftar.svg"
          alt="Register Illustration"
          width={600}
          height={420}
          className="w-full max-w-2xl h-auto"
          priority
        />
      </div>
    </div>
  );
} 
