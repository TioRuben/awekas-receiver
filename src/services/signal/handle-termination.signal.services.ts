import { Server } from "http";

import * as Log from "../log";

export const handleSignal = (server: Server) => () => {
  Log.logWarn("Termination signal received.");
  Log.logInfo("Closing http server.");
  server.close();
  process.exit(0);
};
