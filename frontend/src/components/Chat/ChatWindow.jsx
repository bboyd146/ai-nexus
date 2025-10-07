import React, { useRef } from "react";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";
import { FeatherIcon } from "../../utils/feather";

export default function ChatWindow({ messages, isTyping, input, setInput, sendMessage, onKeyDown }) {
  const messagesRef = useRef(null);

  return (
    <div className="chat-window rounded-2xl p-6 w-full max-w-lg mx-auto border border-white/10 shadow-lg backdrop-blur-xl">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center">
          <FeatherIcon name="MessageSquare" color="white" />
        </div>
        <div className="ml-3">
          <h3 className="font-medium">AI Assistant</h3>
          <p className="text-xs text-slate-400">Online</p>
        </div>
      </div>

      <div ref={messagesRef} className="space-y-4 mb-6 h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role}>
            {m.text}
          </ChatBubble>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} onKeyDown={onKeyDown} />
    </div>
  );
}
