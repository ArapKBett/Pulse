import express from "express";
import { loginWithX, logout, refreshToken } from "../controllers/authController";

const router = express.Router();

router.get("/x", loginWithX);
router.post("/logout", logout);
router.post("/refresh", refreshToken);

export default router;
