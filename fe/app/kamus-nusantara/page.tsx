import dynamic from "next/dynamic";

import Chatbot from "./Chatbot";

export default function KamusNusantaraPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Jumbotron placeholder */}
      <div style={{ padding: "48px 0", textAlign: "center", background: "#7b3f00", color: "#fff" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Jumbotron Title</h1>
        <p style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
          Tambahkan deskripsi atau highlight di sini. (Silakan edit sesuai kebutuhan)
        </p>
      </div>
      {/* Chatbot */}
      <Chatbot />
      {/* Footer placeholder */}
      <footer style={{ textAlign: "center", padding: 24, color: "#7b3f00", fontWeight: 500 }}>
        &copy; {new Date().getFullYear()} Jejak Nusantara
      </footer>
    </div>
  );
} 
