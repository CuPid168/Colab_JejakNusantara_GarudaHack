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
    let speed = 60;
    intervalRef.current && clearInterval(intervalRef.current);
    function getSpeed(idx: number) {
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

function renderWithBold(text: string) {
  return text.replace(/\*/g, "");
}

export default function Chatbot() {
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

  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    const saved = localStorage.getItem(HISTORY_KEY_PREFIX + id);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setChatState(prev => ({
          ...prev,
          history: parsed.map((msg: any) =>
            msg.role === "ai" ? { ...msg, typewriter: false } : msg
          )
        }));
      } catch { }
    }
  }, []);

  useEffect(() => {
    if (sessionId) {
      localStorage.setItem(HISTORY_KEY_PREFIX + sessionId, JSON.stringify(chatState.history));
    }
  }, [chatState.history, sessionId]);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [chatState.history, chatState.loading]);

  useEffect(() => {
    setChatState(prev => ({
      ...prev,
      showWelcome: !prev.history.some(h => h.role === "user"),
    }));
  }, [chatState.history]);

  const lastBotIdx = chatState.history.map(h => h.role).lastIndexOf("ai");
  const lastBotMsg = lastBotIdx !== -1 ? chatState.history[lastBotIdx] : null;
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
    <div
      className="w-full max-w-none rounded-xl shadow-md bg-white flex flex-col h-[80vh] box-border mt-10 mb-10 px-6 py-6 lg:px-20 lg:py-12 "
    >
      <h1 className="text-2xl font-bold mb-4 text-left text-[#222]">Mulai percakapan kamu!</h1>
      <div
        ref={chatAreaRef}
        className="flex-1 overflow-y-auto bg-[#f8f9fa] rounded-lg p-4 mb-4 flex flex-col bg-gray-100"
      >
        {chatState.showWelcome && (
          <div className="text-white bg-[#7B4019] rounded-2xl px-5 py-2.5 self-start mb-3 max-w-[80%] font-medium">
            Selamat datang! Tanyakan apa saja tentang budaya Indonesia, bahasa daerah, makanan, cerita rakyat, atau tradisi unik. Klik saran di bawah untuk mulai!
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
                className="flex justify-start mb-2"
              >
                <div
                  className="bg-[#7B4019] text-white rounded-2xl px-4 py-2 max-w-[80%] whitespace-pre-line self-start"
                >
                  {renderWithBold(typewriterText)}
                </div>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className={`flex mb-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-[80%] whitespace-pre-line ${msg.role === "user" ? "bg-white text-black self-end shadow-md !rounded-tr-none" : "bg-[#7b3f00] text-white self-start shadow-md !rounded-tl-none"}`}
              >
                {msg.role === "ai" ? renderWithBold(msg.text) : msg.text}
              </div>
            </div>
          );
        })}
        {chatState.loading && (
          <div className="flex justify-start mb-2">
            <div className="bg-[#f1faee] rounded-2xl px-4 py-2 max-w-[80%] self-start flex items-center min-h-[32px]">
              <DotWave size={32} speed={1.2} color="#7b3f00" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="flex gap-2 mb-2 flex-wrap">
        {SUGGESTIONS.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(s)}
            className="bg-[#f1faee] text-[#7b3f00] border-none rounded-2xl px-4 py-1.5 text-sm cursor-pointer font-medium shadow-sm transition-colors duration-200 hover:bg-[#ffe5d0]"
            type="button"
          >
            {s}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="ml-auto bg-[#e63946] text-white border-none rounded-2xl px-4 py-1.5 text-sm cursor-pointer font-medium shadow-sm"
          type="button"
        >
          Hapus Chat
        </button>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-end gap-2 w-full"
      >
        <TextareaAutosize
          value={chatState.input}
          onChange={e => setChatState(prev => ({ ...prev, input: e.target.value }))}
          onKeyDown={handleInputKeyDown}
          minRows={1}
          maxRows={6}
          placeholder="Tanya bahasa atau seputar budaya ..."
          className="flex-1 px-3 py-3 rounded-full border border-[#FF7D29] resize-none text-base outline-none w-full disabled:bg-gray-100"
          disabled={chatState.loading}
        />
        <button
          type="submit"
          disabled={chatState.loading || !chatState.input.trim()}
          className={`rounded-full flex items-center justify-center text-white font-bold text-xl px-4 py-2 transition-colors duration-200 ${chatState.loading || !chatState.input.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF7D29] hover:bg-[#c92a2a] cursor-pointer"}`}
          aria-label="Kirim"
        >
          ▶
        </button>
      </form>
      {chatState.error && <div className="text-[#e63946] mt-2">{chatState.error}</div>}
    </div>
  );
} 
