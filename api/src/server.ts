import fs from "fs";
import app from "./app";
import config from "./configs";
import https from "https";

const PORT: number = config.app.port;

// listening the server once the mock data is created.
// To make sure the api responses with the mock data on first call itself
// use environment set PORT or custom port. Signifacant in heroku deploy
const privateKey = fs.readFileSync("certs/selfsigned.key", "utf8");
const certificate = fs.readFileSync("certs/selfsigned.crt", "utf8");
const options = { key: privateKey, cert: certificate };
https.createServer(options, app).listen(process.env.PORT || PORT, () => {
  console.log("Express server listening on port " + PORT);
});
