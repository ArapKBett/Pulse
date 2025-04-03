import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "5000", 10),
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "your-refresh-secret",
  X_CLIENT_ID: process.env.X_CLIENT_ID || "",
  X_CLIENT_SECRET: process.env.X_CLIENT_SECRET || "",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: parseInt(process.env.DB_PORT || "5432", 10),
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "password",
  DB_NAME: process.env.DB_NAME || "pulse",
};
