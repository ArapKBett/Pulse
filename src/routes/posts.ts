import express from "express";
import { getPosts, analyzePost } from "../controllers/postController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.get("/:userId", authMiddleware, getPosts);
router.get("/analyze/:postId", authMiddleware, analyzePost);

export default router;
