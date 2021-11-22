import { Router } from "express";

export default Router().get("/*", (req, res) => {
  res.send({ apiVersion: "1.0", serverTime: new Date() });
});
