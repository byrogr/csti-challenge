import {JwtPayload} from "jsonwebtoken";

export default interface JwtServicePort {
    signIn(payload: Object): string;
    verify(token: string): JwtPayload | string;
}
