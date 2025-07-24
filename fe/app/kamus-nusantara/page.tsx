"use client";
import { useState, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { DotWave } from "@uiball/loaders";

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

const HISTORY_KEY_PREFIX = "kamus_history_";
const SUGGESTIONS = [
  "Apa makanan khas Bali?",
  "Ceritakan legenda Sangkuriang",
  "Apa arti batik?",
];

function useTypewriter(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18 + Math.random() * 30);
    return () => clearInterval(interval);
  }, [text, active]);
  return displayed;
}

export default function KamusNusantara() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ role: "user" | "ai"; text: string; typewriter?: boolean }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionId, setSessionId] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    const saved = localStorage.getItem(HISTORY_KEY_PREFIX + id);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch { }
    }
  }, []);

  useEffect(() => {
    if (sessionId) {
      localStorage.setItem(HISTORY_KEY_PREFIX + sessionId, JSON.stringify(history));
    }
  }, [history, sessionId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  useEffect(() => {
    if (history.some(h => h.role === "user")) setShowWelcome(false);
    else setShowWelcome(true);
  }, [history]);

  const lastBotIdx = history.map(h => h.role).lastIndexOf("ai");
  const lastBotMsg = lastBotIdx !== -1 ? history[lastBotIdx] : null;
  const shouldTypewriter = !!(lastBotMsg && lastBotMsg.typewriter);
  const typewriterText = useTypewriter(shouldTypewriter ? lastBotMsg.text : "", shouldTypewriter);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setError("");
    const userMsg = { role: "user" as const, text: input };
    setHistory(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/kamus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, sessionId }),
      });
      const data = await res.json();
      if (res.ok) {
        setHistory(prev => [
          ...prev,
          { role: "ai", text: data.reply, typewriter: true },
        ]);
      } else {
        setError(data.error || "Terjadi kesalahan.");
      }
    } catch (err) {
      setError("Gagal menghubungi server.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  const handleClear = () => {
    setHistory([]);
    setError("");
    setShowWelcome(true);
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #eee", background: "#fff", display: "flex", flexDirection: "column", height: "80vh" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Kamus Nusantara</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        {SUGGESTIONS.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(s)}
            style={{
              background: "#f1faee",
              color: "#7b3f00",
              border: "none",
              borderRadius: 16,
              padding: "6px 14px",
              fontSize: 14,
              cursor: "pointer",
              fontWeight: 500,
              boxShadow: "0 1px 2px #eee",
              transition: "background 0.2s",
            }}
          >
            {s}
          </button>
        ))}
        <button
          onClick={handleClear}
          style={{
            marginLeft: "auto",
            background: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "6px 14px",
            fontSize: 14,
            cursor: "pointer",
            fontWeight: 500,
            boxShadow: "0 1px 2px #eee",
          }}
        >
          Hapus Chat
        </button>
      </div>
      {/* Chat area */}
      <div style={{ flex: 1, overflowY: "auto", background: "#f8f9fa", borderRadius: 8, padding: 16, marginBottom: 16, display: "flex", flexDirection: "column" }}>
        {showWelcome && (
          <div style={{ color: "#fff", background: "#7b3f00", borderRadius: 16, padding: "10px 18px", alignSelf: "flex-start", marginBottom: 12, maxWidth: "80%", fontWeight: 500 }}>
            Selamat datang! Tanyakan apa saja tentang budaya Indonesia, bahasa daerah, makanan, cerita rakyat, atau tradisi unik. Klik saran di atas untuk mulai!
          </div>
        )}
        {history.map((msg, idx) => {
          if (msg.role === "ai" && msg.typewriter && idx === lastBotIdx && shouldTypewriter) {
            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    background: "#7b3f00",
                    color: "#fff",
                    borderRadius: 16,
                    padding: "8px 16px",
                    maxWidth: "80%",
                    whiteSpace: "pre-line",
                    alignSelf: "flex-start",
                  }}
                >
                  {typewriterText}
                </div>
              </div>
            );
          }
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  background: msg.role === "user" ? "#e63946" : "#7b3f00",
                  color: "#fff",
                  borderRadius: 16,
                  padding: "8px 16px",
                  maxWidth: "80%",
                  whiteSpace: "pre-line",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 8 }}>
            <div style={{ background: "#f1faee", borderRadius: 16, padding: "8px 16px", maxWidth: "80%", alignSelf: "flex-start", display: "flex", alignItems: "center", minHeight: 32 }}>
              <DotWave size={32} speed={1.2} color="#7b3f00" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {/* Input area */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        style={{ display: "flex", alignItems: "flex-end", gap: 8 }}
      >
        <TextareaAutosize
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          minRows={1}
          maxRows={6}
          placeholder="Tanya bahasa atau seputar budaya ..."
          style={{ flex: 1, padding: 12, borderRadius: 20, border: "1px solid #ccc", resize: "none", fontSize: 16, outline: "none" }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          style={{
            padding: "10px 18px",
            borderRadius: "50%",
            background: loading || !input.trim() ? "#ccc" : "#e63946",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Kirim"
        >
          ▶
        </button>
      </form>
      {error && <div style={{ color: "#e63946", marginTop: 8 }}>{error}</div>}
    </div>
  );
} 
