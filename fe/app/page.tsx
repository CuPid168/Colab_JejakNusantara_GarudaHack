"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap, FaComments, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion";

const marqueeImages1 = [
  { src: "/assets/rajaAmpat.jpg", alt: "Raja Ampat" },
  { src: "/assets/pempek.jpg", alt: "Pempek" },
  { src: "/assets/sateMaranggi.jpg", alt: "Sate Maranggi" },
  { src: "/assets/pantaiKuta.jpg", alt: "Pantai Kuta" },
  { src: "/assets/gunungBromo.jpg", alt: "Gunung Bromo" },
];

const marqueeImages2 = [
  { src: "/assets/wakatobi.jpg", alt: "Wakatobi" },
  { src: "/assets/sotoBanjar.jpg", alt: "Soto Banjar" },
  { src: "/assets/pantaiAnyer.jpg", alt: "Pantai Anyer" },
  { src: "/assets/danauToba.jpg", alt: "Danau Toba" },
  { src: "/assets/pulauKomodo.jpg", alt: "Pulau Komodo" },
];

const firstMarqueeContent = [...marqueeImages1, ...marqueeImages1];
const secondMarqueeContent = [...marqueeImages2, ...marqueeImages2];

const feedbacks = [
  {
    avatar: "https://i.pravatar.cc/300?img=1",
    name: "Yanto Budiman",
    domicile: "Kediri",
    feedback:
      "Lewat Jejak Nusantara, aku baru tahu kalau daerah-daerah di Indonesia punya budaya yang sedalam ini. Seru banget eksplorasinya!",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=2",
    name: "Siti Rahma",
    domicile: "Makassar",
    feedback:
      "Platform ini bikin aku makin cinta sama budaya Indonesia. Banyak info menarik yang sebelumnya aku nggak tahu!",
  },
  {
    avatar: "https://i.pravatar.cc/300?img=3",
    name: "Budi Santoso",
    domicile: "Bandung",
    feedback:
      "Fitur-fiturnya keren dan mudah digunakan. Cocok buat generasi muda yang mau belajar budaya lokal!",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselApi = useRef<EmblaCarouselType | undefined>(undefined);
  useEffect(() => {
    if (!carouselApi.current) return;
    const api = carouselApi.current;
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [carouselApi.current]);
  // Auto-slide
  useEffect(() => {
    if (!carouselApi.current) return;
    const api = carouselApi.current;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselApi.current]);
  const goToSlide = (idx: number) => {
    if (!carouselApi.current) return;
    carouselApi.current.scrollTo(idx);
  };

  return (
    <>
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto w-full grid items-center gap-6 px-4 lg:px-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col space-y-4">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              34 Provinsi
            </motion.h1>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FF7D29]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              7.241 Budaya
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Bahasa, Adat, Kesenian, dan Kuliner Tradisional Indonesia adalah warisan yang tak ternilai. Mari pelajari, pahami, dan teruskan kepada generasi selanjutnya!
            </motion.p>
            <div className="flex gap-3 items-center">
              <Link
                className=" text-white bg-linear-to-r from-[#7B4019] to-[#E1752E] rounded-full px-6 rounded-full py-4 "
                href="/tentang-kami"
              >
                Tentang Jejak Nusantara
              </Link>
              <Link
                className="shadow-md flex gap-3 bg-white justify-center items-center rounded-full px-6 py-4 text-[#FF7D29]"
                href="kamus-nusantara"
              >
                Tanya AI Budaya
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-0 flex justify-center items-center w-full">
              <div
                className="absolute z-0"
                style={{
                  width: '60vw',
                  maxWidth: '28rem',
                  height: '60vw',
                  maxHeight: '28rem',
                  borderRadius: '50%',
                  background: '#FF7D29',
                  opacity: 0.7,
                  filter: 'blur(8vw)',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Image
                src="/images/landing_jumbotron.png"
                alt="landing jumbotron"
                width={800}
                height={600}
                className="w-full max-w-3xl h-auto object-cover rounded-xl z-10"
                priority
              />
            </div>
          </motion.div>

        </div>
      </motion.section>
      {/* Info Section: Cultural Problems */}
      <motion.section
        className="w-full py-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#7B4019] to-[#E1752E] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
            {/* Problem 1 */}
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-base md:text-lg mb-1">
                  Pendidikan Budaya yang Terbatas
                </p>
                <p className="text-gray-200 text-xs md:text-sm">
                  Edukasi budaya lokal sering kali hanya diajarkan di bangku SD, tanpa keberlanjutan yang
                  disesuaikan dengan transformasi digital
                </p>
              </div>
            </div>
            {/* Problem 2 */}
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg">
                <FaComments className="text-white text-2xl" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-white text-base md:text-lg mb-1">
                  Gen Z Minim Bisa Bahasa Daerah Sendiri
                </div>
                <div className="text-gray-200 text-xs md:text-sm">
                  Karena generasi Gen Z yang nantinya jadi orang tua juga nggak bisa, bahasa daerah makin
                  terancam punah.
                </div>
              </div>
            </div>
            {/* Problem 3 */}
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-white text-base md:text-lg mb-1">
                  Budaya Terlupakan di Era Digital
                </div>
                <div className="text-gray-200 text-xs md:text-sm">
                  Di tengah arus globalisasi dan konten luar yang mendominasi, budaya lokal makin
                  terpinggirkan dan jarang dikenali oleh generasi digital.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto w-full grid items-center gap-6 px-4 lg:px-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-0 flex justify-center items-center w-full">
              <div
                className="absolute z-0"
                style={{
                  width: '60vw',
                  maxWidth: '28rem',
                  height: '60vw',
                  maxHeight: '28rem',
                  borderRadius: '50%',
                  background: '#FF7D29',
                  opacity: 0.7,
                  filter: 'blur(8vw)',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <Image
                src="/images/landing_peta.png"
                alt="landing jumbotron"
                width={800}
                height={600}
                className="w-full max-w-3xl h-auto object-cover rounded-xl z-10"
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold tracking-tighter sm:text-xl md:text-2xl text-[#FF7D29] tracking-widest">
              PETA BUDAYA
            </h1>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Jelajahi Ragam Budaya Nusantara dan Bagikan Budaya Anda!
            </h1>
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-lg">
                <Image src="/images/budaya.png" alt="Alat Musik" width={50} height={50} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-black text-base md:text-lg mb-1">Budaya</p>
                <p className="text-black/50 text-xs md:text-sm">
                  Budaya adalah identitas bangsa. Mari lestarikan agar generasi muda tetap mengenal jati diri
                  Indonesia.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-lg">
                <Image src="/images/makanan.png" alt="Alat Musik" width={50} height={50} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-black text-base md:text-lg mb-1">Makanan Daerah</p>
                <p className="text-black/50 text-xs md:text-sm">
                  Makanan tradisional mencerminkan kekayaan daerah. Rasakan cita rasa khas nusantara dan
                  kenali asal-usulnya.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-lg">
                <Image src="/images/wisata.png" alt="Alat Musik" width={50} height={50} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-black text-base md:text-lg mb-1">Tempat Wisata</p>
                <p className="text-black/50 text-xs md:text-sm">
                  Jelajahi keindahan alam dan budaya lokal. Setiap tempat punya cerita yang layak dijaga dan
                  dibagikan.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-lg">
                <Image src="/images/alat-musik.png" alt="Alat Musik" width={50} height={50} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-black text-base md:text-lg mb-1">Alat Musik</p>
                <p className="text-black/50 text-xs md:text-sm">
                  Alat musik tradisional adalah suara warisan budaya. Mainkan, kenali, dan hidupkan kembali
                  irama nusantara.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-32">
              <Link
                className="flex flex-rows items-center justify-center text-white bg-linear-to-r from-[#7B4019] to-[#E1752E] rounded-full px-6 rounded-full py-4 "
                href="/peta-budaya"
              >
                <p className="mr-2">Jelajahi Budaya Nusantara</p>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Ragam Nusantara Section */}
      <motion.section
        className="w-full py-12 mb-20 bg-background"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Ragam Nusantara</h2>
        </div>

        {/* Marquee 1: Left */}
        <Marquee pauseOnHover={false} gradient={false} className="w-full mb-4">
          <div className="flex gap-4">
            {firstMarqueeContent.map((image, index) => (
              <div
                key={`first-${index}`}
                className="relative flex-shrink-0 rounded-md overflow-hidden"
                // ✅ Use inline styles for fixed dimensions
                style={{ width: "450px", height: "250px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  // ✅ Add the sizes prop to fix the warning
                  sizes="450px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Marquee 2: Right */}
        <Marquee direction="right" pauseOnHover={false} gradient={false} className="w-full">
          <div className="flex gap-4">
            {secondMarqueeContent.map((image, index) => (
              <div
                key={`second-${index}`}
                className="relative flex-shrink-0 rounded-md overflow-hidden"
                style={{ width: "450px", height: "250px" }}
              >
                <Image src={image.src} alt={image.alt} fill sizes="450px" className="object-cover" />
              </div>
            ))}
          </div>
        </Marquee>
      </motion.section>
      {/* Jejak Nusantara Section */}
      <motion.section
        className="w-full py-16 -mb-24"
        style={{ background: '#FDF8EE' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center relative">
          {/* Decorative Image - now outside carousel container */}
          <div className="absolute top-0 left-0 z-0 pointer-events-none select-none" style={{ transform: 'translate(430%, 80%)' }}>
            <Image
              src="/images/landing_jejak.png"
              alt="Jejak Decorative"
              width={100}
              height={100}
              className="opacity-90"
              priority
            />
          </div>
          <h3 className="text-[#FF7D29] tracking-widest font-semibold text-base md:text-lg mb-1 text-center">Jejak Nusantara</h3>
          <h2 className="text-black text-2xl md:text-4xl font-bold mb-8 text-center">Pendapat Pengguna</h2>
          {/* Carousel */}
          <div className="w-full max-w-2xl relative flex flex-col items-center z-10">
            {/* Carousel Component */}
            <Carousel
              opts={{ loop: true, align: 'center' }}
              className="w-full"
              setApi={api => (carouselApi.current = api)}
            >
              <CarouselContent>
                {feedbacks.map((item, idx) => (
                  <CarouselItem key={idx} className="flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg px-8 py-12 mb-12 flex flex-col items-center w-full max-w-xl relative z-10">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#FF7D29]"
                      />
                      <div className="text-lg font-bold text-black text-center">{item.name}</div>
                      <div className="text-[#FF7D29] text-sm font-medium mb-2 text-center">{item.domicile}</div>
                      <div className="text-gray-500 text-center text-base max-w-md">{item.feedback}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white border-2 border-[#FF7D29] text-[#FF7D29] hover:bg-[#FF7D29] hover:text-white transition-colors" />
              <CarouselNext className="bg-white border-2 border-[#FF7D29] text-[#FF7D29] hover:bg-[#FF7D29] hover:text-white transition-colors" />
            </Carousel>
            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {feedbacks.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#FF7D29]' : 'bg-[#FF7D29] opacity-30'}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
