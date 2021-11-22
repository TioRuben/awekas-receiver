import { AwekasQuery } from "../awekas.model";

export const validateRequest = (request: AwekasQuery): boolean =>
  !!request &&
  !!request.ID &&
  request.ID.length > 0 &&
  !!request.PASSWORD &&
  request.PASSWORD.length > 0 &&
  !!request.action &&
  request.action === "updateraww" &&
  !!request.realtime &&
  request.realtime === "1" &&
  !!request.dateutc &&
  request.dateutc === "now";
