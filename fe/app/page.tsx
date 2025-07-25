import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-20 gap-10 w-full bg-[#ffeea9]/20">
      <div className="space-y-10 flex-1">
        <div className="space-y-2">
          <h1 className="font-extrabold text-5xl">34 Provinsi</h1>
          <h2 className="font-extrabold text-5xl text-[#FF7D29]">7.241 Budaya</h2>
        </div>
        <p className="text-black/50">
          Bahasa, Adat, Kesenian, dan Kuliner Tradisional Indonesia adalah warisan yang tak ternilai. Mari
          pelajari, pahami, dan teruskan kepada generasi selanjutnya!
        </p>
        <div className="flex gap-3 items-center">
          <Link
            className=" text-white bg-linear-to-r px-6 rounded-full py-4 from-[#7B4019] to-[#E1752E] rounded-full-"
            href="/about"
          >
            Tentang Jejak Nusantara
          </Link>
          <Link
            className="shadow-md flex gap-3 bg-white justify-center items-center rounded-full px-6 py-4 text-[#FF7D29]"
            href="kamus-nusantara"
          >
            Tanya AI Budaya
            <span>
              <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5229 0 20 4.47715 20 10C20 15.5229 15.5229 20 10 20C4.47715 20 0 15.5229 0 10ZM12.6647 8.46154C12.1594 7.58638 9.82041 6.21525 8.288 5.38396C7.68464 5.05662 7.38294 4.89295 7.13433 5.03648C6.88571 5.18002 6.87661 5.52314 6.8584 6.20935C6.81214 7.9521 6.83005 10.6633 7.33532 11.5385C7.8406 12.4136 10.1797 13.7847 11.712 14.616C12.3154 14.9434 12.6171 15.1071 12.8657 14.9635C13.1144 14.82 13.1234 14.4768 13.1416 13.7907C13.1879 12.0479 13.1699 9.33672 12.6647 8.46154Z"
                  fill="#FF7D29"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 flex-1 bg-black">
        <div className="self-start">
          <img src="images/beranda-1.png" alt="foto1" className=" object-cover w-52 h-40" />
          <img src="images/beranda-2.png" alt="foto2" className=" object-cover w-52 h-40" />
        </div>
        <div className="self-end">
          <img src="images/beranda-3.png" alt="foto3" className="w-52 h-32" />
          <img src="images/beranda-4.png" alt="foto4" className="w-52 h-32" />
        </div>
      </div>
    </div>
  );
}
