import {ICardToken} from "../models/cardToken";
import {ICard} from "../models/card";

export default interface CardServicePort {
    saveCardToken(cardToken: ICardToken): void;
    getCardByKey(key: string): Promise<ICard>;
}
