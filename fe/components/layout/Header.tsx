"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { FiMenu } from "react-icons/fi";

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

const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isActive = (link: string) => {
    return pathname === link || (pathname.startsWith(link) && link !== "/");
  };

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image width={32} height={32} src="/images/jejak-nusantara-merah.svg" alt="Jejak Nusantara" />
          <span className="font-bold text-[#7B4019] text-xl">Jejak Nusantara</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={`px-5 py-2 rounded-md transition-colors ${isActive(link.href) ? "font-bold text-primary" : "text-foreground hover:text-primary"}`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {/* Desktop Auth/User */}
        <div className="hidden lg:flex items-center gap-3">
          {session && session.user ? (
            <>
              <span className="font-semibold text-primary">{session.user.name}</span>
              <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
                <span className="rounded-full">Keluar</span>
              </Button>
            </>
          ) : (
            authButtons.map((button) => (
              <Button
                asChild
                key={button.name}
                variant={button.name === "Daftar" ? "default" : "outline"}
                className={`rounded-full ${button.name === "Daftar" ? "text-white" : ""}`}
              >
                <Link href={button.href}>{button.name}</Link>
              </Button>
            ))
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="p-2">
                <FiMenu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image width={28} height={28} src="/images/jejak-nusantara-merah.svg" alt="Jejak Nusantara" />
                    <span className="font-bold text-primary text-lg">Jejak Nusantara</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base transition-colors ${isActive(link.href) ? "font-bold text-primary" : "text-foreground hover:text-primary"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 p-4 border-t mt-2">
                {session && session.user ? (
                  <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
                    <span className="rounded-full">Keluar</span>
                  </Button>
                ) : (
                  authButtons.map((button) => (
                    <Button
                      asChild
                      key={button.name}
                      variant={button.name === "Daftar" ? "default" : "outline"}
                      className={`rounded-full ${button.name === "Daftar" ? "text-white" : ""}`}
                    >
                      <Link href={button.href}>{button.name}</Link>
                    </Button>
                  ))
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
