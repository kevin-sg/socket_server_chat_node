import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import { validationHandler } from "@/utilities";

export function dbValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(validationHandler(errors.array(), res.statusCode));
    }
    next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}
