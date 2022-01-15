import passport from "passport";
import PassportGoogle from "passport-google-oauth20";
import config from "../configs";

export class Passport {
  private GoogleStrategy = PassportGoogle.Strategy;

  public init = () => {
    this.authenticate();
  };

  private authenticate() {
    passport.use(
      `employers-google`,
      new this.GoogleStrategy(
        {
          clientID: config.googleAuthConfig.clientID,
          clientSecret: config.googleAuthConfig.clientSecret,
          callbackURL: `${config.callbackUrl}employers/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, cb) => {
          return cb(null, {
            emaild: profile.emails[0].value,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
          });
        }
      )
    );
  }
}
