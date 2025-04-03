import { DataSource } from "typeorm";
import { UserEntity } from "../models/User";
import { PostEntity } from "../models/Post";
import { SessionEntity } from "../models/Session";
import { db } from "../config/db";

export const dbService = {
  async upsertUser(user: { id: string; username: string }) {
    const repo = db.getRepository(UserEntity);
    return repo.save({ ...user, updatedAt: new Date() });
  },

  async getPosts(userId: string) {
    const repo = db.getRepository(PostEntity);
    return repo.find({ where: { userId } });
  },

  async deleteSession(userId: string) {
    const repo = db.getRepository(SessionEntity);
    return repo.delete({ userId });
  },
};
