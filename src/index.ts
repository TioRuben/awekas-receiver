import Services from "./services";

Services.Environment.configureEnv();

const server = Services.HTTP.initHTTP();

Services.Signal.addListeners(server);
