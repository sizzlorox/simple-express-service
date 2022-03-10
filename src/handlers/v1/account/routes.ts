import * as path from "path";
import { IRouter, Router } from "express";
import AccountController from "./controller";
import AccountService from "./service";

const service = new AccountService();
const controller = new AccountController(service);

export default function loadIn(): {
  router: IRouter;
  prefix: string;
} {
  const r = Router({ mergeParams: true });
  r.put("/", (req, res, next) => controller.create(req, res, next));
  r.get("/", (req, res, next) => controller.get(req, res, next));
  r.get("/:id", (req, res, next) => controller.getById(req, res, next));
  r.post("/:id", (req, res, next) => controller.updateById(req, res, next));
  r.delete("/:id", (req, res, next) => controller.deleteById(req, res, next));

  return {
    router: r,
    prefix: path.basename(__dirname),
  };
}
