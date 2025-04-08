import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "production",
  PORT: parseInt(process.env.PORT || "8080", 10),
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "your-refresh-secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  X_CLIENT_ID: process.env.X_CLIENT_ID || "",
  X_CLIENT_SECRET: process.env.X_CLIENT_SECRET || "",
  X_REDIRECT_URI: process.env.X_REDIRECT_URI || "http://localhost:5000/api/auth/x/callback",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: parseInt(process.env.DB_PORT || "5432", 10),
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "password",
  DB_NAME: process.env.DB_NAME || "pulse",
  DB_SSL: process.env.DB_SSL === "true",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
  REDIS_DB: parseInt(process.env.REDIS_DB || "0", 10),
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  LOG_FILE: process.env.LOG_FILE || "logs/app.log",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
};
