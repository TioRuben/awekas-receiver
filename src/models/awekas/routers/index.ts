import { Router } from "express";

import { updateData } from "./update.router.awekas";

export default Router().get(
  "/weatherstation/updateweatherstation.php",
  updateData
);
