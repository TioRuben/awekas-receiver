import { RequestHandler } from "express";

export const defaultRouter: RequestHandler<{}, string> = (req, res) => {
  res.send("Awekas Receiver 1.0");
};
