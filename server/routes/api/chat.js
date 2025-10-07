import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
    try {
        const { message, history } = req.body;

        // 🧹 Clean and format messages
        const formattedMessages = (history || [])
            .filter(
                (m) =>
                    m &&
                    typeof m.role === "string" &&
                    typeof m.text === "string" &&
                    m.text.trim() !== ""
            )
            .map((m) => ({
                role: m.role,
                content: m.text.trim(),
            }));

        // Add latest user message
        formattedMessages.push({ role: "user", content: message?.trim() || "" });

        // Validate that we have valid message content
        if (formattedMessages.some((m) => !m.content)) {
            throw new Error("One or more messages have invalid content.");
        }

        // 🧠 Send request to OpenAI
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: formattedMessages,
        });

        res.json({ reply: completion.choices[0].message.content });
    } catch (err) {
        console.error("Chat API error:", err);
        res.status(500).json({ error: "Failed to get AI response" });
    }
});

export default router;
