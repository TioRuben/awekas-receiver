import { Router } from "express";

import { defaultRouter } from "./default.router.awekas";
import { updateData } from "./update.router.awekas";

export default Router()
  .get("/", defaultRouter)
  .get("/weatherstation/updateweatherstation.php", updateData);
