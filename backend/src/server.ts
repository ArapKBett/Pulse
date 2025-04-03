import express from "express";
import cors from "cors";
import helmet from "helmet";
import { authRouter } from "./routes/auth";
import { postsRouter } from "./routes/posts";
import { reportsRouter } from "./routes/reports";
import { authMiddleware } from "./middleware/auth";
import { errorMiddleware } from "./middleware/error";
import { loggerMiddleware } from "./middleware/logger";
import { rateLimitMiddleware } from "./middleware/rateLimit";
import { initializeDb } from "./config/db";
import { env } from "./config/env";

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(loggerMiddleware);
app.use(rateLimitMiddleware);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/reports", reportsRouter);

// Error handling
app.use(errorMiddleware);

const startServer = async () => {
  try {
    await initializeDb();
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
