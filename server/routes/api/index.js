import { Router } from "express";
import chatRoutes from "./chat.js";

const router = Router();

// Mount chat routes at /api/chat
router.use("/chat", chatRoutes);

export default router;