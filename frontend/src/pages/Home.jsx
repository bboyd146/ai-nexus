import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer, ParticlesBackground, ChatWindow } from "../components";
import useChat from "../hooks/useChat";
import { GradientButton } from "../components"; 

export default function Home() {
  const { history: messages, sendMessage, loading: isTyping } = useChat();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
      setInput("");
    }
  };

  const handleNewChat = () => {
    window.localStorage.removeItem("chatMessages");
    window.location.reload();
  };

  return (
<div className="font-['Space Grotesk'] text-slate-50 min-h-screen relative overflow-hidden">
      <Header handleNewChat={handleNewChat} />

<main className="container mx-auto px-6 relative z-10 backdrop-blur-[1px] bg-white/5 rounded-2xl shadow-lg">
        <section
          id="showcase"
          className="py-20 flex flex-col lg:flex-row gap-12"
        >
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Conversational AI
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              An advanced AI chatbot showcasing cutting-edge NLP for 2025
              portfolios.
            </p>
            <div className="flex space-x-4">
              <GradientButton
                text="Live Demo"
                onClick={() => navigate("/")}
              />
              <GradientButton
                text="View Code"
                onClick={() => window.open("https://github.com/bboyd146/ai-nexus", "_blank")}
              />
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:w-1/2 relative">
            <ChatWindow
              messages={messages}
              isTyping={isTyping}
              input={input}
              setInput={setInput}
              sendMessage={() => {
                sendMessage(input);
                setInput("");
              }}
              onKeyDown={onKeyDown}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
