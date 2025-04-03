import { DataSource } from "typeorm";
import { UserEntity } from "../models/User";
import { PostEntity } from "../models/Post";
import { SessionEntity } from "../models/Session";
import { env } from "./env";

export const db = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [UserEntity, PostEntity, SessionEntity],
  synchronize: env.NODE_ENV === "development", // Auto-sync in dev only
  logging: env.NODE_ENV === "development",
});

export const initializeDb = async () => {
  await db.initialize();
  console.log("Database connected");
};
