import { Request, Response } from "express";

import { errorHandler, successHandler } from "@/utilities";

class AuthController {
  public async loginAuth({ body }: Request, res: Response) {
    try {
      res.status(201).json(successHandler("OK", { data: body }, res.statusCode));
    } catch (err) {
      res.status(401).json(errorHandler("Unauthorized", res.statusCode));
    }
  }

  public revalidedTokenAuth(req: Request, res: Response) {
    res.status(201).json(successHandler("OK", { data: "RENEW - POST" }, res.statusCode));
  }
}

export default new AuthController();
