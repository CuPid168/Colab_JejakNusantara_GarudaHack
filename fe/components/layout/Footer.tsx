import { Lato } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className={`${lato.className} mt-17 flex h-[500px] flex-col items-center justify-center bg-black text-white`}
    >
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold">Jejak Nusantara</h1>
        <p className="mb-7 w-[700px] font-light">
          Halo, kami Jejak Nusantara. Kami berupaya menjadi jembatan agar budaya dapat terus dilestarikan,
          dibagikan, dikenal, dan dipelajari lintas generasi. Melalui teknologi dan kolaborasi, kami ingin
          memastikan bahwa warisan budaya Indonesia tetap hidup di hati masyarakat, kini dan nanti.
        </p>
        <div className="space-x-4">
          <Link href="/about" className="cursor-pointer rounded-full bg-[#131313] px-6 py-3">
            👀 Tentang Kami
          </Link>
          <Link href="/login" className="cursor-pointer rounded-full bg-[#131313] px-6 py-3">
            🔑 Login
          </Link>
        </div>
      </div>
      <div className="mt-25 flex w-full max-w-[1350px] items-center justify-between">
        <Link href="/" className="flex cursor-pointer items-center gap-2 rounded-md bg-[#181818] p-5">
          <Image src="/images/jejak-nusantara-putih.svg" alt="Logo Jejak Nusantara" width={30} height={30} />
          <span className={`${lato.className} ml-2 text-2xl font-bold`}>Jejak Nusantara</span>
        </Link>
        <p>© 2025 Jejak Nusantara. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/30"
          >
            <FaFacebookF className="size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/30"
          >
            <FaLinkedinIn className="size-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/30"
          >
            <FaTwitter className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
