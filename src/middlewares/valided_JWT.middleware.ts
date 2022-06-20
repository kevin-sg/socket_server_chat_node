import type { Response, NextFunction } from "express";
import JWT from "jsonwebtoken";

import * as Global from "@/global";
import * as Utility from "@/utilities";

export function validateJWT(req: Global.IRequestWithUserProps, res: Response, next: NextFunction): Response | void {
  const accessToken = req.cookies[Global.environmentVariables.COOKIE_V1_KEY] as string;
  try {
    if (!accessToken) {
      return res
        .status(Global.EnumHttpStatusCodes.UNAUTHOTIZED)
        .cookie(Global.environmentVariables.COOKIE_V1_KEY, "", {
          path: Global.EnumPathApiVersion.V1,
          expires: new Date(),
        })
        .json(Utility.errorHandler(Global.EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
    const payloadUser = JWT.verify(accessToken, Global.environmentVariables.SECRET_TOKEN_PRIVATE_KEY);
    req.user = payloadUser as Global.IPayloadUserIdWithToken;

    next();
  } catch (error) {
    res
      .status(Global.EnumHttpStatusCodes.UNAUTHOTIZED)
      .json(Utility.errorHandler(Global.EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
  }
}
