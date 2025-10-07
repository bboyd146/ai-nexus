import React from "react";

export default function ChatBubble({ role, children }) {
  const classes =
    role === "assistant"
      ? "message-ai rounded-lg p-4 border-l-4 border-blue-500 bg-[linear-gradient(135deg,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0)_100%)]"
      : "message-user rounded-lg p-4 ml-8 border-r-4 border-emerald-500 bg-[linear-gradient(135deg,rgba(74,222,128,0.15)_0%,rgba(74,222,128,0)_100%)]";

  return (
    <div className={classes}>
      <p>{children}</p>
    </div>
  );
}
