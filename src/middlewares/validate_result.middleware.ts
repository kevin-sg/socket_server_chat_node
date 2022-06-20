import type { Request, Response, NextFunction } from "express";
import * as ExpressValidator from "express-validator";

import * as Global from "@/global";
import * as Utility from "@/utilities";

export function validateResultField(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = ExpressValidator.validationResult(req);
    const resultErrors = errors.array().map((error) => ({ msg: error.msg, param: error.param }));

    if (!errors.isEmpty()) {
      return res
        .status(Global.EnumHttpStatusCodes.BAD_REQUEST)
        .json(Utility.validationHandler(resultErrors, res.statusCode));
    }

    next();
  } catch (err) {
    res
      .status(Global.EnumHttpStatusCodes.UNAUTHOTIZED)
      .json(Utility.errorHandler(Global.EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
  }
}
