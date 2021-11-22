import { Server } from "http";

import { handleSignal } from "./handle-termination.signal.services";

export const addListeners = (server: Server) => {
  process.on("SIGTERM", handleSignal(server));
  process.on("SIGINT", handleSignal(server));
  process.on("SIGHUP", handleSignal(server));
};
