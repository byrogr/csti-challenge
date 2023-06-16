import {Router} from "express";

import {tokenController} from "../../../shared/di/dependencies";
import {cardValidator} from "../validators/card.validator";

const tokenRouter: Router = Router();

console.log(cardValidator());
tokenRouter.post('/', ...cardValidator(), tokenController.createToken.bind(tokenController));

export default tokenRouter;
