import express, { json } from "express";

import { Awekas } from "../../models";
import * as Environment from "../environment";
import * as Log from "../log";
import { rateLimitMiddleware } from "./middlewares";

export const initHTTP = () => {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", 1);
  app.use(json());
  app.use(rateLimitMiddleware());
  app.use(Awekas.Router);
  return app.listen(Environment.getEnvVar("PORT"), () => {
    Log.logInfo(
      `Awekas receiver listening on port ${Environment.getEnvVar("PORT")}`
    );
  });
};
