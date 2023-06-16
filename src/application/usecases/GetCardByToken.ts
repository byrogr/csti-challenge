import CardServicePort from "../../domain/ports/cardService.port";
import {ICard} from "../../domain/models/card";
import VerifyToken from "./VerifyToken";
import {GlobalConfig} from "../../infrastructure/shared/config/infra.config";

export default class GetCardByToken {
    constructor(
        private readonly cardService: CardServicePort,
        private readonly verifyToken: VerifyToken
    ) {}

    async execute(token: string): Promise<ICard> {
        const payload: any = this.verifyToken.execute(token);
        const key = `${GlobalConfig.CACHE_KEY}${payload.email}`;
        const card: ICard = await this.cardService.getCardByKey(key);
        return card;
    }
}
