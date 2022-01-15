import express from "express";
import { Routes } from './routes/indexRoutes';
import cors from 'cors';
import { Passport } from "./_helpers/passport";
import passportLib from "passport";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public passportHelper: Passport = new Passport();

    constructor() {
        this.app = express();
        this.passportHelper.init();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(
            cors({ origin: ["https://localhost:3000"] })
        );
        this.app.use(passportLib.initialize());
    }
}

export default new App().app;