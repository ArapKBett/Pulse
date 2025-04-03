import { Request, Response, NextFunction } from "express";
import { xService } from "../services/xService";
import { cacheService } from "../services/cacheService";

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const cacheKey = `posts:${userId}`;
    const cached = await cacheService.get(cacheKey);

    if (cached) return res.status(200).json(cached);

    const posts = await xService.getXPosts(userId, req.user!.token);
    await cacheService.set(cacheKey, posts, 300); // Cache for 5 minutes
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const analyzePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    const analysis = await xService.analyzePost(postId, req.user!.token);
    res.status(200).json(analysis);
  } catch (error) {
    next(error);
  }
};
