import CardServicePort from "../../domain/ports/cardService.port";
import CardToken, {ICardToken} from "../../domain/models/cardToken";
import SignInToken from "./SignInToken";
import Card from "../../domain/models/card";

export default class CreateCardToken {
    constructor(
        private readonly cardService: CardServicePort,
        private readonly signInToken: SignInToken
    ) {}

    async execute(card: Card): Promise<string> {
        const token: string = this.signInToken.execute(card);
        const cardToken: ICardToken = new CardToken(
            card.email,
            card.cardNumber,
            card.cvv,
            card.expirationYear,
            card.expirationMonth,
            token
        );
        await this.cardService.saveCardToken(cardToken);
        return token;
    }
}
