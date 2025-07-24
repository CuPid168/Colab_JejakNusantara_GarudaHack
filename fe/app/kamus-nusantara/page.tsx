"use client";
import { useState, useEffect } from "react";

function getOrCreateSessionId() {
  if (typeof window === "undefined") return "";
  let sessionId = localStorage.getItem("kamus_session_id");
  if (!sessionId) {
    if (window.crypto?.randomUUID) {
      sessionId = window.crypto.randomUUID();
    } else {
      sessionId = Math.random().toString(36).slice(2) + Date.now();
    }
    localStorage.setItem("kamus_session_id", sessionId);
  }
  return sessionId;
}

export default function KamusNusantara() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const res = await fetch("/api/kamus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId }),
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(data.reply);
      } else {
        setError(data.error || "Terjadi kesalahan.");
      }
    } catch (err) {
      setError("Gagal menghubungi server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #eee", background: "#fff" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Kamus Nusantara</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={3}
          placeholder="Tulis pertanyaan tentang budaya Indonesia..."
          style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", resize: "vertical" }}
          required
        />
        <button type="submit" disabled={loading || !input.trim()} style={{ padding: "10px 0", borderRadius: 8, background: "#e63946", color: "#fff", fontWeight: 600, border: "none", cursor: loading ? "not-allowed" : "pointer" }}>
          {loading ? "Mengirim..." : "Tanya"}
        </button>
      </form>
      {error && <div style={{ color: "#e63946", marginTop: 16 }}>{error}</div>}
      {response && (
        <div style={{ marginTop: 24, padding: 16, background: "#f1faee", borderRadius: 8, whiteSpace: "pre-line" }}>
          {response}
        </div>
      )}
    </div>
  );
} 
