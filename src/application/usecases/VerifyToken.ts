import JwtServicePort from "../../domain/ports/jwtService.port";
import {JwtPayload} from "jsonwebtoken";

export default class VerifyToken {
    constructor(private readonly tokenService: JwtServicePort) {
    }

    execute(token: string): JwtPayload | string {
        return this.tokenService.verify(token);
    }
}
