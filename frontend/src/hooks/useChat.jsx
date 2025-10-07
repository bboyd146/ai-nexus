// hooks/useChat.js
import { useState } from "react";
import axios from "axios";

export default function useChat() {
    const [history, setHistory] = useState([{ role: "assistant", text: "Hello! How can I assist you today?" }]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {
        if (!message.trim()) return;

        const newHistory = [...history, { role: "user", text: message }];
        setHistory(newHistory);
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5004/api/chat", {
                message,
                history: newHistory,
            });

            const reply = res.data.reply;
            setHistory((prev) => [...prev, { role: "assistant", text: reply }]);
        } catch (err) {
            console.error("Error sending message:", err);
            setHistory((prev) => [
                ...prev,
                { role: "assistant", text: "⚠️ Something went wrong. Try again." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return { history, sendMessage, loading };
}
