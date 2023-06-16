import {getRedisClient} from "../config/redis.config";

export default class RedisService {
    private readonly client;
    constructor() {
        this.client = getRedisClient();
        this.client.on('connect', () => {
            console.log("** Redis connection established **");
        });
        this.client.on("error", (error) => {
            console.error(`Redis error, service degraded: ${error}`);
        });
        this.client.connect();
    }

    async save(key: string, value: string|object, ttl: number): Promise<any> {
        const formatValue = (typeof value === 'object') ? JSON.stringify(value) : value;
        await this.client.set(key, formatValue, { EX: ttl });
    }

    async getByKey(key: string): Promise<string | null> {
        const value = await this.client.get(key);
        return value;
    }
}
