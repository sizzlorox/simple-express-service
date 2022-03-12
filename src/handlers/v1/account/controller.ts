import { NextFunction, Request, Response } from "express";
import AccountService from "./service";

export class AccountController {
  private readonly service: AccountService;

  constructor(service: AccountService) {
    this.service = service;
  }

  create(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const result = this.service.create(data);
    return res.send(result);
  }

  get(req: Request, res: Response, next: NextFunction) {
    const result = this.service.get();
    return res.send(result);
  }

  getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const result = this.service.getById(id);
    return res.send(result);
  }

  updateById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const result = this.service.updateById(id);
    return res.send(result);
  }

  deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const result = this.service.deleteById(id);
    return res.send(result);
  }
}
export default AccountController;
