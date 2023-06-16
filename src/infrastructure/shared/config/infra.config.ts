import { getEnvironmentNumber, getEnvironmentString } from "./environment";

export const GlobalConfig = Object.freeze({
    ENVIRONMENT: getEnvironmentString('NODE_ENV', 'dev'),
    JWT_SECRET: getEnvironmentString('JWT_SECRET', 'jwtSecretPassphrase'),
    JWT_EXPIRATION: getEnvironmentNumber('JWT_EXPIRATION', 1),
    CACHE_KEY: getEnvironmentString('REDIS_KEY_SAVE', "CARD:")
})
export const RedisConfig = Object.freeze({
    REDIS_HOST: getEnvironmentString('REDIS_HOST', '127.0.0.1'),
    REDIS_USER: getEnvironmentString('REDIS_USER', ''),
    REDIS_PASS: getEnvironmentString('REDIS_PASS', ''),
    REDIS_PORT: getEnvironmentNumber('REDIS_PORT', 6379)
});
