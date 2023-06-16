import {Router} from "express";

import HealthController from "../controllers/health.controller";

const healthRouter: Router = Router();
const healthController: HealthController = new HealthController();

healthRouter.get('/check', healthController.checkHealthStatus.bind(healthController));

export default healthRouter;
