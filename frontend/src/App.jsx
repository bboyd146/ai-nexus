import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function ChatBubble({ role, children }) {
  const classes =
    role === "assistant"
      ? "message-ai rounded-lg p-4"
      : "message-user rounded-lg p-4 ml-8";

  return (
    <div className={classes}>
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const resp = await axios.post("/api/chat", {
        message: userMsg.text,
        history: messages,
      });
      const assistantText = resp.data?.reply || "Sorry, something went wrong.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: assistantText },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Error connecting to AI." },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">AI Nexus</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500">
            Live Demo
          </button>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="chat-window rounded-2xl p-6 bg-[rgba(15,23,42,0.7)] border border-white/5">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
              💬
            </div>
            <div className="ml-3">
              <h3 className="font-medium">AI Assistant</h3>
              <p className="text-xs text-slate-400">Online</p>
            </div>
          </div>

          <div
            ref={messagesRef}
            className="space-y-4 mb-6 h-96 overflow-y-auto"
          >
            {messages.map((m, i) => (
              <ChatBubble key={i} role={m.role}>
                {m.text}
              </ChatBubble>
            ))}

            {isTyping && (
              <div className="typing-indicator flex items-center p-4">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-1 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-1 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
            )}
          </div>

          <div className="flex items-center">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-l-full py-3 px-4 focus:outline-none resize-none"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-r-full p-3 ml-2"
            >
              Send
            </button>
          </div>
        </section>

        <aside>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold mb-3">Features</h3>
            <ul className="list-disc list-inside text-slate-400">
              <li>Contextual chat with simple memory (server-side optional)</li>
              <li>Secure API proxy (serverless) to keep keys safe</li>
              <li>Pluggable: add vector DB for long-term memory</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
