import dotenv from "dotenv";
import express from "express";

import getRoutes from "./common/getRoutes";
import bootstrap from "./router";

dotenv.config();

const { PORT } = process.env;
const app = express();

bootstrap(app).then((): void => {
  // app.get("/", (req, res) => res.send("woo"));
  console.log(getRoutes(app).join("\n"));

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
