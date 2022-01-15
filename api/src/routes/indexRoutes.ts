import { Request, Response } from "express";
import express from "express";
import { UserRoutes } from "./user-routes";

export class Routes {
  private userRoutes: UserRoutes = new UserRoutes();

  public routes(app: express.Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!",
      });
    });
    app.use("/employers", this.userRoutes.router);
  }
}
