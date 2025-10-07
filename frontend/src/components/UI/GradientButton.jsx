// components/GradientButton.jsx
import React from "react";

export default function GradientButton({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300 
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 shadow-lg"
        }`}
    >
      {text}
    </button>
  );
}
