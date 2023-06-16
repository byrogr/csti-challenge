import Card, {ICard} from "./card";
export interface ICardToken extends ICard {
    token: string
}

export default class CardToken extends Card {
    token: string;
    constructor(
        email: string,
        cardNumber: number,
        cvv: number,
        expirationYear: string,
        expirationMonth: string,
        token: string
    ) {
        super(email, cardNumber, cvv, expirationYear, expirationMonth);
        this.token = token;
    }
}
