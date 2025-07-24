"use client";

import Image from "next/image";
import about from "../../public/images/about.svg";

const tentangKami = () => {
  return (
    <div className="flex flex-col px-6 md:px-20 py-12 space-y-12">
      <h1 className="text-4xl font-extrabold mb-4">
        34 Provinsi <span className="text-[#FF7D29]">7.241 Budaya</span>
      </h1>
      <p className="text-lg text-justify w-max-md line-clamp-3">
        Indonesia, dengan 34 provinsi, adalah rumah bagi lebih dari 7.000 ragam
        budaya. Namun, ironisnya, data menunjukkan banyak dari warisan ini
        terancam punah. Generasi muda kini semakin asing dengan budaya dan
        bahasa daerahnya sendiri. Sebuah kehilangan besar jika semua kekayaan
        ini lenyap begitu saja, bukan?
      </p>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold">Jejak Nusantara</h2>
          <p className="text-lg text-justify mt-4">
            Jejak Nusantara hadir untuk menghidupkan dan melestarikan warisan
            budaya Indonesia. Melalui platform ini, masyarakat dapat menjelajahi
            lebih dari 7.000 budaya dari 34 provinsi, dari makanan khas, adat
            istiadat, bahasa daerah, hingga tarian dan alat musik tradisional.
            Kami juga membuka ruang kontribusi agar generasi muda ikut andil
            dalam pelestarian budaya ini. Kami percaya bahwa dengan teknologi,
            edukasi, dan kolaborasi, budaya kita dapat terus hidup, dikenal, dan
            diteruskan dari generasi ke generasi.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image src={about} alt="about" className="w-full h-auto max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default tentangKami;
