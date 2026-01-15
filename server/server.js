import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());


// 🔥 THIS IS THE MISSING PIECE
app.use("/api", router);


// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// React catch-all (MUST be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
