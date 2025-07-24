"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname === link || (pathname.startsWith(link) && link !== "/");
  };
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Peta Budaya", href: "/peta-budaya" },
    { name: "Kamus Nusantara", href: "/kamus-nusantara" },
    { name: "Komunitas", href: "/komunitas" },
  ];

  const authButtons = [
    { name: "Masuk", href: "/login" },
    { name: "Daftar", href: "/register" },
  ];

  const { data: session } = useSession();

  return (
    <div className="px-17 shadow-md h-20 w-full flex items-center justify-between bg-white">
      <div className="flex items-center justify-center gap-4 h-full">
        <Image width={30} height={30} src="images/jejak-nusantara-merah.svg" alt="Jejak Nusantara" />
        <span className="font-bold text-[#7B4019] text-xl">Jejak Nusantara</span>
      </div>
      <div className="flex items-center justify-center h-full text-black">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive(link.href) ? "font-bold text-[#7B4019]" : ""
              } h-full flex items-center justify-center px-7`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3">
        {session && session.user ? (
          <>
            <span className="font-semibold text-[#7B4019]">{session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="border border-[#7B4019] text-black px-4 py-2 rounded-full"
            >
              Keluar
            </button>
          </>
        ) : (
          authButtons.map((button) => (
            <Link
              key={button.name}
              href={button.href}
              className={`${
                isActive(button.href) ? "bg-[#7B4019]" : "border border-[#7B4019] text-black"
              } px-4 py-2 rounded-full`}
            >
              {button.name}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Header;
