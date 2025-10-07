import { Router } from "express";
import apiRoutes from "./api/index.js";

const router = Router();

// Mount API routes at /api
router.use("/api", apiRoutes);

// Caatch-all route for undefined endpoints
router.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

export default router;