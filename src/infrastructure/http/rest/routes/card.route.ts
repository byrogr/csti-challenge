import {Router} from "express";

import {cardController} from "../../../shared/di/dependencies";

const tokenRouter: Router = Router();

tokenRouter.get('/', cardController.getCard.bind(cardController));

export default tokenRouter;
