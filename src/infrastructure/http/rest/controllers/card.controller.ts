import GetCardByToken from "../../../../application/usecases/GetCardByToken";
import {Request, Response} from "express";
import {ICard} from "../../../../domain/models/card";
import {StatusCodes} from "http-status-codes";
import {TokenExpiredError} from "jsonwebtoken";
import CardNotFoundError from "../../../../domain/errors/cardNotFound.error";

export default class CardController {
    constructor(private readonly getCardByToken: GetCardByToken) {}

    async getCard (req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization || "";
            if (token === "") {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    failed: true,
                    message: "Token is missing"
                });
            }
            const card: ICard = await this.getCardByToken.execute(token);
            return res.status(StatusCodes.OK).json({ data: card });
        } catch (Error) {
            if (Error instanceof TokenExpiredError) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    failed: true,
                    message: 'JWT token is expired'
                });
            }

            if (Error instanceof CardNotFoundError) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    failed: true,
                    message: Error.message
                });
            }

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                failed: true,
                message: 'Ooops! Retry in few minutes'
            });
        }
    }
}
