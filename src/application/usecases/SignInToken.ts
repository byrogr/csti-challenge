import JwtServicePort from "../../domain/ports/jwtService.port";
import {ICard} from "../../domain/models/card";

export default class SignInToken {
    constructor(private readonly tokenService: JwtServicePort) {
    }

    execute(card: ICard): string {
        const payload = Object.assign({}, card);
        return this.tokenService.signIn(payload);
    }
}
