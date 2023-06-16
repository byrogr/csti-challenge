import { createClient } from "redis";
import { RedisConfig } from "../../../shared/config/infra.config";
export const getRedisClient = () => {
    const url = `redis://${RedisConfig.REDIS_HOST}:${RedisConfig.REDIS_PORT}`
    return createClient({url});
}
