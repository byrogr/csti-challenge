import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import Card, {ICard} from "../../../../domain/models/card";
import CreateCardToken from "../../../../application/usecases/CreateCardToken";
import {validationResult} from "express-validator";

export default class TokenController {
    constructor(private readonly createCardToken: CreateCardToken) {
    }
    async createToken(req: Request, res: Response) {
        try {
            const result = validationResult(req);
            if (!result.isEmpty()) {
                return res.status(StatusCodes.BAD_REQUEST).json({ errors: result.array() });
            }
           const card: ICard = new Card(
               req.body.email,
                req.body.card_number,
               req.body.cvv,
               req.body.expiration_year,
              req.body.expiration_month
           );
          const token = await this.createCardToken.execute(card);
          return res.status(StatusCodes.OK).json({token});
        } catch (e) {
            console.log('e', e);
        }
    }
}
