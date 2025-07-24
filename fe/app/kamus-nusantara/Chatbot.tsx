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
  const [done, setDone] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed("");
    setDone(false);
    let i = 0;
    let speed = 60; // start slow
    intervalRef.current && clearInterval(intervalRef.current);
    function getSpeed(idx: number) {
      // Slow for first 10 chars, then faster
      if (idx < 10) return 60;
      if (idx < 30) return 30;
      return 12;
    }
    function typeNext() {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        setDone(true);
        return;
      }
      speed = getSpeed(i);
      intervalRef.current = setTimeout(typeNext, speed);
    }
    typeNext();
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [text, active]);

  return displayed;
}

export default function Chatbot() {
  // Group related state for efficiency
  const [chatState, setChatState] = useState({
    input: "",
    history: [] as Array<{ role: "user" | "ai"; text: string; typewriter?: boolean }>,
    loading: false,
    error: "",
    showWelcome: true,
  });
  const [sessionId, setSessionId] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  // Load session and history on mount
  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    const saved = localStorage.getItem(HISTORY_KEY_PREFIX + id);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Set typewriter: false for all AI messages
        setChatState(prev => ({
          ...prev,
          history: parsed.map((msg: any) =>
            msg.role === "ai" ? { ...msg, typewriter: false } : msg
          )
        }));
      } catch {}
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (sessionId) {
      localStorage.setItem(HISTORY_KEY_PREFIX + sessionId, JSON.stringify(chatState.history));
    }
  }, [chatState.history, sessionId]);

  // Scroll to bottom on new message or loading
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [chatState.history, chatState.loading]);

  // Show/hide welcome message
  useEffect(() => {
    setChatState(prev => ({
      ...prev,
      showWelcome: !prev.history.some(h => h.role === "user"),
    }));
  }, [chatState.history]);

  // Only typewriter for the latest AI message that is new (not from localStorage)
  const lastBotIdx = chatState.history.map(h => h.role).lastIndexOf("ai");
  const lastBotMsg = lastBotIdx !== -1 ? chatState.history[lastBotIdx] : null;
  // Only typewriter if the last AI message is the most recent and has typewriter:true
  const shouldTypewriter = !!(lastBotMsg && lastBotMsg.typewriter && lastBotIdx === chatState.history.length - 1);
  const typewriterText = useTypewriter(shouldTypewriter ? lastBotMsg.text : "", shouldTypewriter);

  const handleSend = async () => {
    if (!chatState.input.trim() || chatState.loading) return;
    setChatState(prev => ({ ...prev, error: "", loading: true, history: [...prev.history, { role: "user", text: prev.input }], input: "" }));
    try {
      const res = await fetch("/api/kamus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatState.input, sessionId }),
      });
      const data = await res.json();
      if (res.ok) {
        setChatState(prev => ({
          ...prev,
          history: [...prev.history, { role: "ai", text: data.reply, typewriter: true }],
          loading: false,
        }));
      } else {
        setChatState(prev => ({ ...prev, error: data.error || "Terjadi kesalahan.", loading: false }));
      }
    } catch (err) {
      setChatState(prev => ({ ...prev, error: "Gagal menghubungi server.", loading: false }));
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setChatState(prev => ({ ...prev, input: suggestion }));
  };

  const handleClear = () => {
    setChatState(prev => ({ ...prev, history: [], error: "", showWelcome: true }));
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
      <div
        ref={chatAreaRef}
        style={{ flex: 1, overflowY: "auto", background: "#f8f9fa", borderRadius: 8, padding: 16, marginBottom: 16, display: "flex", flexDirection: "column" }}
      >
        {chatState.showWelcome && (
          <div style={{ color: "#fff", background: "#7b3f00", borderRadius: 16, padding: "10px 18px", alignSelf: "flex-start", marginBottom: 12, maxWidth: "80%", fontWeight: 500 }}>
            Selamat datang! Tanyakan apa saja tentang budaya Indonesia, bahasa daerah, makanan, cerita rakyat, atau tradisi unik. Klik saran di atas untuk mulai!
          </div>
        )}
        {chatState.history.map((msg, idx) => {
          if (
            msg.role === "ai" &&
            msg.typewriter &&
            idx === lastBotIdx &&
            shouldTypewriter
          ) {
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
        {chatState.loading && (
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
          value={chatState.input}
          onChange={e => setChatState(prev => ({ ...prev, input: e.target.value }))}
          onKeyDown={handleInputKeyDown}
          minRows={1}
          maxRows={6}
          placeholder="Tanya bahasa atau seputar budaya ..."
          style={{ flex: 1, padding: 12, borderRadius: 20, border: "1px solid #ccc", resize: "none", fontSize: 16, outline: "none" }}
          disabled={chatState.loading}
        />
        <button
          type="submit"
          disabled={chatState.loading || !chatState.input.trim()}
          style={{
            padding: "10px 18px",
            borderRadius: "50%",
            background: chatState.loading || !chatState.input.trim() ? "#ccc" : "#e63946",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            cursor: chatState.loading || !chatState.input.trim() ? "not-allowed" : "pointer",
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
      {chatState.error && <div style={{ color: "#e63946", marginTop: 8 }}>{chatState.error}</div>}
    </div>
  );
} 