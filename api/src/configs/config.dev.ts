import IConfig from "./IConfig";

const config: IConfig = {
  app: {
    port: 8080,
  },
  googleAuthConfig: {
    clientID:
      "1041773032026-6k73bq610c6ovnn42di88ruavnt7dm7b.apps.googleusercontent.com",
    clientSecret: "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",
  },
  callbackUrl: "https://localhost:8080/",
  appUrl: "https://localhost:3000/",
};

export default config;
