import type { Request, Response } from "express";

import * as Global from "@/global";
import * as Utility from "@/utilities";
import * as UseCase from "@/use_cases";

class UserController {
  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(200).json(Utility.successHandler("OK", { data: "GET" }, res.statusCode));
    } catch (err) {
      res.status(401).json(Utility.errorHandler("Unauthorized", res.statusCode));
    }
  }

  public async postUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;
    try {
      const { user, token } = await UseCase.createUser({ name, email, password });

      res
        .status(Global.EnumHttpStatusCodes.CREATE)
        .cookie(Global.environmentVariables.COOKIE_V1_KEY, token, {
          path: Global.EnumPathApiVersion.V1,
          httpOnly: true,
        })
        .json(Utility.successHandler(Global.EnumHttpStatusMessages.OK, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(Global.EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(Utility.errorHandler(Global.EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(201).json(Utility.successHandler("OK", { data: "PUT" }, res.statusCode));
    } catch (err) {
      // Do some with error here
      res.status(401).json(Utility.errorHandler("Unauthorized", res.statusCode));
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      // Dome some with success here
      res.status(201).json(Utility.successHandler("OK", { data: "DELETE" }, res.statusCode));
    } catch (err) {
      // Do some with error here
      res.status(401).json(Utility.errorHandler("Unauthorized", res.statusCode));
    }
  }
}

export default new UserController();
