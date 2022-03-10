import dotenv from "dotenv";
import express from "express";

import getRoutes from "./common/getRoutes";
import loadIn from "./router";

dotenv.config();

const { PORT } = process.env;
const app = express();

loadIn(app).then((): void => {
  // app.get("/", (req, res) => res.send("woo"));
  console.log(getRoutes(app).join("\n"));

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
