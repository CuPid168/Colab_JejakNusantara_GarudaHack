"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { FloatingInput } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="mx-auto mt-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 max-w-4xl w-full px-4">
      <div className="w-full md:w-1/2">
        <h1 className="mb-2 text-4xl font-bold">Bergabung Sekarang</h1>
        <p className="mb-5 text-lg text-gray-500">
          Lengkapi formulirnya dan kamu siap menjelajah budaya nusantara!
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <FloatingInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FloatingInput
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Alert>{error}</Alert>}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full py-4 text-sm text-white"
            style={{ backgroundImage: "var(--gradient-coklat)" }}
          >
            Masuk
          </button>
        </form>
        <div className="my-6 flex items-center justify-center gap-4 text-sm text-black/50">
          <hr className="w-full" />
          atau
          <hr className="w-full" />
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mb-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-white py-4 text-sm font-semibold text-black/75 transition-colors hover:bg-gray-100"
        >
          Login dengan Google
          <Image
            src="images/google-logo.svg"
            alt="hide Password"
            width={18}
            height={18}
          />
        </button>
        <p className="text-center text-sm text-gray-500">
          Belum punya akun?
          <Link
            href="/register"
            className="ml-2 font-bold text-blue-500 underline"
          >
            Daftar
          </Link>
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/images/daftar.svg"
          alt="vector daftar"
          width={350}
          height={350}
          className="w-full max-w-xs md:max-w-sm h-auto"
        />
      </div>
    </div>
  );
}
