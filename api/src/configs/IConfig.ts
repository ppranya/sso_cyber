interface IConfig {
  app: IAppConfig;
  googleAuthConfig: IGoogleAuth;
  callbackUrl: string;
  appUrl: string;
}

interface IGoogleAuth {
  clientID: string;
  clientSecret: string;
}

interface IAppConfig {
  port: number;
}

export default IConfig;
