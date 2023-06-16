import CardServicePort from "../../../../domain/ports/cardService.port";
import {ICardToken} from "../../../../domain/models/cardToken";
import RedisService from "../service/redis.service";
import {GlobalConfig} from "../../../shared/config/infra.config";
import Card, {ICard} from "../../../../domain/models/card";
import CardNotFoundError from "../../../../domain/errors/cardNotFound.error";

export default class CardServiceCacheAdapter implements CardServicePort {
    constructor(private readonly redisService: RedisService) {}
    async getCardByKey(key: string): Promise<ICard> {
        const value = await this.redisService.getByKey(key);
        if (!value) {
            throw new CardNotFoundError("Card not found");
        }
        const { email, cardNumber, cvv, expirationYear, expirationMonth } = JSON.parse(value || '{}');
        return new Card(email, cardNumber, cvv, expirationYear, expirationMonth);
    }

    async saveCardToken(cardToken: ICardToken): Promise<void> {
        const keyRedis = this.buildKeyRedis(cardToken.email);
        await this.redisService.save(keyRedis, JSON.stringify(cardToken), GlobalConfig.JWT_EXPIRATION * 60);
    }

    private buildKeyRedis(key: string): string {
        return `${GlobalConfig.CACHE_KEY}${key}`;
    }
}
