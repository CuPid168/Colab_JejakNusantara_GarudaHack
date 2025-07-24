import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const CONTEXT_PROMPT = `Kamu adalah pakar budaya Indonesia yang ramah, asik, dan kekinian, seperti teman sebaya Gen Z namun tidak terlalu gen Z banget juga. Jawab pertanyaan seputar budaya Indonesia—makanan, cerita rakyat, musik, bahasa, dan lain-lain—dengan gaya santai, seru, dan mudah dimengerti anak muda. Kalau ada pertanyaan di luar topik budaya Indonesia, tolong tolak dengan sopan dan tetap ramah. Tolong jawablah to the point dan tanpa basa basi yang terlalu banyak`;

const conversationHistory = new Map<
  string,
  Array<{ role: string; text: string }>
>();
const MAX_HISTORY = 5;

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();
    if (!message) {
      return NextResponse.json(
        { error: "Pesan tidak ditemukan. Mohon sertakan pertanyaan Anda." },
        { status: 400 },
      );
    }
    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID tidak ditemukan. Mohon sertakan sessionId." },
        { status: 400 },
      );
    }

    const history = conversationHistory.get(sessionId) || [];
    const updatedHistory = [...history, { role: "user", text: message }];
    const trimmedHistory = updatedHistory.slice(-MAX_HISTORY * 2);

    let prompt = CONTEXT_PROMPT + "\n";
    for (const entry of trimmedHistory) {
      if (entry.role === "user") {
        prompt += `Pengguna: ${entry.text}\n`;
      } else {
        prompt += `AI: ${entry.text}\n`;
      }
    }
    prompt += `Pengguna: ${message}`;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key belum dikonfigurasi di server." },
        { status: 500 },
      );
    }

    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!geminiRes.ok) {
      const error = await geminiRes.text();
      return NextResponse.json(
        { error: `Terjadi kesalahan dari Gemini API: ${error}` },
        { status: geminiRes.status },
      );
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Tidak ada respons dari Gemini API.";

    const newHistory = [...trimmedHistory, { role: "ai", text: reply }];
    conversationHistory.set(sessionId, newHistory.slice(-MAX_HISTORY * 2));

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
