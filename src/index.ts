import dotenv from "dotenv";
import express from "express";
import pinoHttp from "pino-http";

import { getRoutes, logger } from "./common";
import bootstrap from "./router";

dotenv.config();
const httpLogger = pinoHttp({
  quietReqLogger: true,
  genReqId: function (req) {
    return req.id;
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

const { PORT } = process.env;
const app = express();

app.use(httpLogger);

bootstrap(app).then((): void => {
  logger.info("Loaded Routes\n" + getRoutes(app).join("\n"));
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
