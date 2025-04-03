import express from "express";
import { generateReport } from "../controllers/reportController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.get("/:userId", authMiddleware, generateReport);

export default router;
