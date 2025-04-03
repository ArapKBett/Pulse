import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

export const cacheService = {
  async get(key: string) {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  },

  async set(key: string, value: any, ttl: number) {
    await redis.set(key, JSON.stringify(value), "EX", ttl);
  },

  async clear(key: string) {
    await redis.del(key);
  },
};
