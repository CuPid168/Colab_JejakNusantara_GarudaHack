"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Peta Budaya", href: "/peta-budaya" },
    { name: "Kamus Nusantara", href: "/kamus-nusantara" },
    { name: "Komunitas", href: "/komunitas" },
  ];

  return (
    <div className="shadow-md h-20 w-full flex items-center justify-between bg-white">
      <div className="flex items-center justify-center gap-4 h-full">
        <Image width={20} height={20} src="images/jejak-nusantara-merah.svg" alt="Jejak Nusantara" />
        <span>Jejak Nusantara</span>
      </div>
      <div className="flex items-center justify-center gap-4 h-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link key={link.name} href={link.href} className={isActive ? "font-bold" : ""}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="/login" className="border border-[#7B4019] px-4 py-2 rounded-full">
          Masuk
        </Link>
        <Link href="/register">Daftar</Link>
      </div>
    </div>
  );
};

export default Header;
