import { Redis } from "ioredis";
require("dotenv").config();

const redisUrl = process.env.REDIS_URL;

const redisClient = () => {
  if (redisUrl) {
    console.log("Redis Connected!");
    return redisUrl;
  }
  throw new Error("Redis connection failed!");
};

export const redis = new Redis(redisClient());