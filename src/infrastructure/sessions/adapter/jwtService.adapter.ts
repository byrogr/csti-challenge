import JwtServicePort from "../../../domain/ports/jwtService.port";
import JwtService from "../services/jwt.service";
import {JwtPayload} from "jsonwebtoken";


export default class JwtServiceAdapter implements JwtServicePort {
    constructor(private readonly jwtService: JwtService) {}
    signIn(payload: Object): string {
        return this.jwtService.createToken(payload);
    }

    verify(token: string): JwtPayload | string {
        return this.jwtService.decodeToken(token);
    }
}
