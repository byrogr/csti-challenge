import jwt, {JwtPayload} from "jsonwebtoken";
import {GlobalConfig} from "../../shared/config/infra.config";

export default class JwtService {
    private readonly jwtAlgorithm: any = 'HS256';
    private readonly jwtSecret: string = GlobalConfig.JWT_SECRET;
    private readonly jwtExpiration: number = GlobalConfig.JWT_EXPIRATION;

    createToken(payload: Object): string {
        return jwt.sign(
            payload,
            this.jwtSecret,
            { algorithm: this.jwtAlgorithm, expiresIn: this.getTokenExpiration() }
        );
    }

    decodeToken(token: string): JwtPayload | string {
        return jwt.verify(token, this.jwtSecret);
    }

    private getTokenExpiration(): number {
        return this.jwtExpiration * 60;
    }
}
