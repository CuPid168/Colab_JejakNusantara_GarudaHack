"use client";

import { useState } from "react";
import { Alert } from "@/components/ui/alert";
import { FloatingInput } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Register = () => {
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
    <div className={`m-auto mt-10 flex w-[1100px] items-center justify-center gap-4`}>
      <div className="">
        <h1 className="mb-2 text-4xl font-bold">Bergabung Sekarang</h1>
        <p className="mb-5 text-lg text-gray-500">
          Lengkapi formulirnya dan kamu siap menjelajah budaya nusantara!
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <FloatingInput
            type="text"
            label="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FloatingInput
            type="text"
            label="Domisili"
            value={domisili}
            onChange={(e) => setDomisili(e.target.value)}
            required
          />
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
          {success && <Alert className="border-green-500 bg-green-50 text-green-700">{success}</Alert>}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full py-4 text-sm text-white"
            style={{ backgroundImage: "var(--gradient-coklat)" }}
          >
            Daftar
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
          Daftar dengan Google
          <Image src="images/google-logo.svg" alt="hide Password" width={18} height={18} />
        </button>
        <p className="text-center text-sm text-gray-500">
          Sudah punya akun?
          <Link href="/login" className="ml-2 font-bold text-blue-500 underline">
            Masuk
          </Link>
        </p>
      </div>
      <Image src="/images/daftar.svg" alt="vector daftar" width={600} height={600} />
    </div>
  );
};

export default Register;
