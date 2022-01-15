import { Router } from "express";
import { UserController } from "../controllers/user";
import { RouteHelper } from "../_helpers/routeHelper";

export class UserRoutes {
  public userController: UserController = new UserController();
  private routeHelper: RouteHelper = new RouteHelper('employers');
  public router: Router = Router();

  public constructor() {
    this.routeHelper.updateAuthRoutes(this.router);
    this.router.get(
      "/user-list",
      this.userController.getuserList
    );
  }
}
