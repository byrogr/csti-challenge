import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

export default class HealthController {
    public async checkHealthStatus(req: Request, res: Response) {
        return res.status(StatusCodes.OK).json({ message: "OK" });
    }
}
