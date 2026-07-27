"use client";

import { useEffect, useRef, useState } from "react";
import { ChatIcon, CloseIcon, SendIcon } from "../icons";

const GREETING = "Hola, soy Nexus. ¿En qué puedo ayudarte?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, sending, open]);

  async function sendMessage(event) {
    event.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ||
            "No dispongo de información suficiente para responder esa consulta. Te recomiendo contactar directamente con nuestro equipo.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Tuvimos un problema de conexión. Intenta de nuevo o escribe a contacto@spectrumt.co.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Nexus, asistente de Spectrum">
          <div className="chat-panel-header">
            <div>
              <strong>Nexus</strong>
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
            >
              <CloseIcon size={18} />
            </button>
          </div>

          <div className="chat-messages" ref={listRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {sending && (
              <div className="chat-bubble assistant chat-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta..."
              autoComplete="off"
              disabled={sending}
            />
            <button
              type="submit"
              className="chat-send"
              aria-label="Enviar"
              disabled={sending || !input.trim()}
            >
              <SendIcon size={16} />
            </button>
          </form>
        </div>
      )}

      {!open && (
        <button
          type="button"
          className="chat-toggle"
          aria-label="Abrir asistente"
          onClick={() => setOpen(true)}
        >
          <ChatIcon size={18} />
          <span className="chat-toggle-label">Preguntar a la IA</span>
        </button>
      )}
    </div>
  );
}
