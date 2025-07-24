import dynamic from "next/dynamic";
import Image from "next/image";

import Chatbot from "./Chatbot";

export default function KamusNusantaraPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Jumbotron */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden" style={{ minHeight: 400 }}>
        {/* Radial Gradient Background ✨ */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "-50px",
            left: "-200px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255, 125, 41, 0.15) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
        
        {/* Left: Text */}
        <div className="flex-1 z-10 max-w-xl text-left">
          <h1 className="font-light text-2xl md:text-4xl leading-tight mb-4 text-[#222]">
            Kamus Nusantara<br />
            <span className="font-extrabold text-[#222] block">Belajar <span className="text-[#FF7D29]">718 bahasa daerah</span> dan tanyakan apa pun tentang budaya Indonesia</span>
          </h1>
          <p className="text-base md:text-lg opacity-50">
            Bukan sekadar tempat belajar bahasa daerah, fitur ini hadir untuk menjawab rasa ingin tahumu tentang kekayaan budaya Nusantara. Tanyakan makna kata,  tradisi, atau seni dari berbagai daerah. Jaga, lestarikan, dan rayakan keberagaman Indonesia bersama.
          </p>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          <Image
            src="/images/kamus-nusantara.svg"
            alt="Kamus Nusantara Illustration"
            width={350}
            height={260}
            className="w-full max-w-md h-auto"
            priority
          />
        </div>
      </div>
      
      {/* Chatbot */}
      <Chatbot />
      
      {/* Footer */}
      <footer style={{ textAlign: "center", padding: 24, color: "#7b3f00", fontWeight: 500 }}>
        &copy; {new Date().getFullYear()} Jejak Nusantara
      </footer>
    </div>
  );
}