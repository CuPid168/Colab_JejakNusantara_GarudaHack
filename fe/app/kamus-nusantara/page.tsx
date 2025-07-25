import dynamic from "next/dynamic";
import Image from "next/image";

import Chatbot from "./Chatbot";

export default function KamusNusantaraPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Jumbotron */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 px-6 md:px-20 py-12">
        {/* Left: Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              top: "20px",
              left: "-100px",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(255, 125, 41, 0.15) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />
          <h1 className="text-4xl font-extrabold mb-4">
            Kamus Nusantara<br />
            <span className="font-extrabold text-[#222] block">Belajar <span className="text-[#FF7D29]">718 bahasa daerah</span> dan tanyakan apa pun tentang budaya Indonesia</span>
          </h1>
          <p className="text-lg text-justify mt-4">
            Bukan sekadar tempat belajar bahasa daerah, fitur ini hadir untuk menjawab rasa ingin tahumu tentang kekayaan budaya Nusantara. Tanyakan makna kata,  tradisi, atau seni dari berbagai daerah. Jaga, lestarikan, dan rayakan keberagaman Indonesia bersama.
          </p>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/kamus-nusantara.svg"
            alt="Kamus Nusantara Illustration"
            width={350}
            height={260}
            className="w-full h-auto max-w-xs"
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
