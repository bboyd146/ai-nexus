import React from "react";
import { FeatherIcon } from "../../utils/feather";

export default function ChatInput({ input, setInput, sendMessage, onKeyDown }) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type your message..."
        className="flex-1 bg-slate-800 border border-slate-700 rounded-l-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-r-full p-3 hover:opacity-90 transition-opacity"
      >
        <FeatherIcon name="Send" color="white" />
      </button>
    </div>
  );
}
