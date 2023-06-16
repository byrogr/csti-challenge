import express, { Application } from 'express';

import { AppConfig } from '../config';
import HealthRoute from "../routes/health.route";
import TokenRoute from "../routes/token.route";
import CardRoute from "../routes/card.route";



export default class Server {
    private app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = AppConfig.PORT;
        this.bootstrap();
    }

    routes(): void {
        this.app.use(`${AppConfig.BASE_URL}/health`, HealthRoute);
        this.app.use(`${AppConfig.BASE_URL}/tokens`, TokenRoute);
        this.app.use(`${AppConfig.BASE_URL}/card`, CardRoute);
    }

    middlewares(): void {
        this.app.use(express.json());
    }

    bootstrap(): void {
        // Middlewares
        this.middlewares();
        // Router
        this.routes();
    }
    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`** Server started on port ${this.port} **`);
        })
    }
}
