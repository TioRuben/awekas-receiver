import { RequestHandler } from "express";

import Services from "../../../services";
import { AwekasQuery } from "../awekas.model";
import * as Domain from "../domain";
import * as Handlers from "../handlers";

export const updateData: RequestHandler<{}, string, {}, AwekasQuery> = (
  req,
  res
) => {
  if (!Domain.validateRequest(req.query)) {
    Services.Log.logWarn("Bad request", { ip: req.ip, query: req.query });
    return res.status(400).send("Bad Request");
  }
  if (!Domain.validateUserPassword(req.query)) {
    Services.Log.logWarn("Unauthorized Request", {
      ip: req.ip,
      query: req.query,
    });
    return res.status(401).send("Unauthorized");
  }
  Handlers.addMeasurement(Domain.mapRequestToModel(req.query))(req.query.ID)
    .then(() => {
      return res.status(200).send("OK");
    })
    .catch((err) => {
      Services.Log.logError("Error while updating data", err);
      return res.status(500).send("Server Error");
    });
};
