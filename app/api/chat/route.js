import {
  buildSystemPrompt,
  FALLBACK_MESSAGE,
  FALLBACK_MESSAGE_EN,
} from "@/lib/assistant-prompt";

const GEMINI_MODEL_DEFAULT = "gemini-flash-latest";
const MAX_HISTORY_MESSAGES = 12;

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "El asistente no está configurado todavía." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  const locale = body?.locale === "en" ? "en" : "es";
  const fallback = locale === "en" ? FALLBACK_MESSAGE_EN : FALLBACK_MESSAGE;

  const sanitized = messages
    .filter(
      (msg) =>
        msg &&
        (msg.role === "user" || msg.role === "assistant") &&
        typeof msg.content === "string" &&
        msg.content.trim().length > 0
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content.slice(0, 2000) }],
    }));

  if (sanitized.length === 0) {
    return Response.json({ error: "Mensaje vacío." }, { status: 400 });
  }

  const model = process.env.GEMINI_MODEL || GEMINI_MODEL_DEFAULT;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const payload = {
    systemInstruction: {
      parts: [{ text: buildSystemPrompt(locale) }],
    },
    contents: sanitized,
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 2048,
      thinkingConfig: { thinkingLevel: "low" },
    },
  };

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return Response.json(
      { reply: fallback, error: "network" },
      { status: 200 }
    );
  }

  if (!response.ok) {
    const detail = await response.text();
    console.error("Gemini error:", detail);
    return Response.json(
      { reply: fallback, error: "gemini" },
      { status: 200 }
    );
  }

  const data = await response.json();
  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || fallback;

  return Response.json({ reply });
}
