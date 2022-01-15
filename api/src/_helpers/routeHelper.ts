import { Router } from "express";
import passport from "passport";
import qs from "qs";
import config from "../configs";

export class RouteHelper {
  private userType: string;

  constructor(userType: string) {
    this.userType = userType;
  }

  public updateAuthRoutes = (router: Router) => {
    router.get(
      "/auth/google",
      passport.authenticate(`${this.userType}-google`, {
        scope: ["profile", "email"],
      })
    );

    router.get(
      "/auth/google/callback",
      passport.authenticate(`${this.userType}-google`, {
        assignProperty: "data",
        failureRedirect: "/login",
      }),
      async (req: any, res) => {
        const expiration = 604800000;
        const { token, ...userData } = req.data;
        console.log(token);
        res.cookie("token", token, {
          expires: new Date(Date.now() + expiration),
          secure: false,
          httpOnly: true,
        });
        const userDataWithSubscribe = { ...userData };
        // Successful authentication, redirect home.
        console.log(`userDataWithSubscribe`, userDataWithSubscribe);
        res.redirect(
          `${config.appUrl}google-auth?${qs.stringify(
            userDataWithSubscribe
          )}`
        );
      }
    );
  };
};
