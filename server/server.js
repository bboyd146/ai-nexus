import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/api/chat.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// React catch-all (must come *after* static)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
