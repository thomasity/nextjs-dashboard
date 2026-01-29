"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  pending?: boolean;
};

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: "assistant",
      content: "Hey! Ask me anything about my projects, skills, or experience.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll on new message / open
  useEffect(() => {
    if (!isOpen) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isOpen, messages.length]);

  // Focus input when opening
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [isOpen]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

    const sendMessage = async (text: string) => {
        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
        };

        const pendingId = crypto.randomUUID();

        const pendingMessage: ChatMessage = {
            id: pendingId,
            role: "assistant",
            content: "…",
            pending: true,
        };

        setMessages(prev => [...prev, userMessage, pendingMessage]);
        setIsWaiting(true);

        try {
            const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text }),
            });

            if (!res.ok) throw new Error("Request failed");

            const { text: reply } = await res.json();

            setMessages(prev =>
            prev.map(m =>
                m.id === pendingId
                ? { ...m, content: reply, pending: false }
                : m
            )
            );
        } catch {
            setMessages(prev =>
            prev.map(m =>
                m.id === pendingId
                ? { ...m, content: "Something went wrong.", pending: false }
                : m
            )
            );
        } finally {
            setIsWaiting(false);
        }
    };

  const onSend = async() => {
    if (!input.trim() || isWaiting) return;
    const text = input.trim();
    setInput("");
    sendMessage(text);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 50,
      }}
      aria-live="polite"
    >
      {!isOpen ? (
        <button
          onClick={open}
          style={{
            border: "1px solid var(--border-color)",
            borderRadius: 999,
            padding: "10px 14px",
            cursor: "pointer",
            fontWeight: 700,
          }}
          aria-label="Open chat"
          className="chatPulse"
        >
          Chat
        </button>
      ) : (
        <div
          role="dialog"
          aria-label="Chat widget"
          style={{
            width: 340,
            height: 420,
            background: "var(--bg-color)",
            border: "3px solid var(--border-color)",
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Portfolio Chat</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>
                Ask about projects, skills, or contact info
              </div>
            </div>

            <button
              onClick={close}
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: 10,
                padding: "6px 10px",
                background: "var(--bg-inverse)",
                cursor: "pointer",
                fontWeight: 700,
                color: "var(--font-inverse)"
              }}
              aria-label="Close chat"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "var(--bg-hover)"
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  padding: "10px 12px",
                  borderRadius: 14,
                  background:
                    m.role === "user" ? "var(--bg-inverse)" : "var(--bg-color)",
                  color: m.role === "user" ? "var(--font-inverse)" : "var(--font-color)",
                  border:
                    m.role === "user"
                      ? "1px solid var(--border-color)"
                      : "1px solid var(--border-color)",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.35,
                  fontSize: 13,
                }}
              >
                {m.pending ? <span className="typingDots" aria-label="Typing" />  : m.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: 10,
              borderTop: "1px solid var(--border-color)",
              display: "flex",
              gap: 8,
              background: "var(--bg-color)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={isWaiting}
              placeholder={isWaiting ? "Waiting for reply…" : "Type a message"}
              style={{
                flex: 1,
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                padding: "10px 12px",
                fontSize: 13,
                outline: "none",

              }}
              aria-label="Message"
              maxLength={800}
            />

            <button
              onClick={onSend}
              disabled={!canSend || isWaiting}
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                padding: "10px 12px",
                background: canSend ? "var(--bg-inverse)" : "var(--border-color)",
                cursor: canSend ? "pointer" : "not-allowed",
                fontWeight: 800,
                color: "var(--font-inverse)"
              }}
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
