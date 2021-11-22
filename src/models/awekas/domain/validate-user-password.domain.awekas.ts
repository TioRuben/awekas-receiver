import Services from "../../../services";
import { AwekasQuery } from "../awekas.model";

export const validateUserPassword = (request: AwekasQuery): boolean =>
  request && Services.Auth.validateUserPassword(request.ID, request.PASSWORD);
