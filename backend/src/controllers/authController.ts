import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { xService } from "../services/xService";
import { dbService } from "../services/dbService";
import { env } from "../config/env";

export const loginWithX = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code } = req.query;
    if (!code) return res.status(400).json({ error: "Authorization code required" });

    const { accessToken, userId } = await xService.getAccessToken(code as string);
    const user = await xService.getUserProfile(accessToken);

    const dbUser = await dbService.upsertUser({ id: userId, username: user.username });
    const token = jwt.sign({ userId: dbUser.id }, env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.user!;
    await dbService.deleteSession(userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { userId: string };
    const newToken = jwt.sign({ userId: decoded.userId }, env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token: newToken });
  } catch (error) {
    next(error);
  }
};
