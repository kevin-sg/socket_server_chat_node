import { Request, Response } from "express";

import * as Global from "@/global";
import * as Utility from "@/utilities";
import * as UseCase from "@/use_cases";

class AuthController {
  public async loginPost(req: Request, res: Response): Promise<void> {
    const { email } = req.body || { email: "" };
    try {
      const { user, token } = await UseCase.loginAuth({ email });

      res
        .status(Global.EnumHttpStatusCodes.CREATE)
        .cookie(Global.environmentVariables.COOKIE_V1_KEY, token, {
          path: Global.EnumPathApiVersion.V1,
          httpOnly: true,
        })
        .json(Utility.successHandler(Global.EnumHttpStatusMessages.OK, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(Global.EnumHttpStatusCodes.INTERNAL_SERVER)
        .json(Utility.errorHandler(Global.EnumHttpStatusMessages.INTERNAL_SERVER, res.statusCode));
    }
  }

  public async revalidedTokenPost(req: Global.IRequestWithUserProps, res: Response): Promise<void> {
    const { uid } = req.user || { uid: "" };
    try {
      const { user, token } = await UseCase.renewAuth({ uid });

      res
        .status(Global.EnumHttpStatusCodes.CREATE)
        .cookie(Global.environmentVariables.COOKIE_V1_KEY, token, {
          path: Global.EnumPathApiVersion.V1,
          httpOnly: true,
        })
        .json(Utility.successHandler(Global.EnumHttpStatusMessages.OK, { data: user }, res.statusCode));
    } catch (err) {
      res
        .status(Global.EnumHttpStatusCodes.INTERNAL_SERVER)
        .json(Utility.errorHandler(Global.EnumHttpStatusMessages.INTERNAL_SERVER, res.statusCode));
    }
  }
}

export default new AuthController();
