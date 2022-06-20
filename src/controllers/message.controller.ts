import type { Response } from "express";

import * as Global from "@/global";
import * as UseCase from "@/use_cases";
import * as Utility from "@/utilities";

class MessageController {
  public async getMessages(req: Global.IRequestWithUserProps, res: Response): Promise<void> {
    try {
      const { uid } = req.user || { uid: "" };
      const subject = req.params.from;

      const { messages } = await UseCase.getMessages({ uid, subject, limit: 30 });

      res.status(Global.EnumHttpStatusCodes.OK).json({ user: uid, subject });
    } catch (err) {
      res
        .status(Global.EnumHttpStatusCodes.UNAUTHOTIZED)
        .json(Utility.errorHandler(Global.EnumHttpStatusMessages.UNAUTHOTIZED, res.statusCode));
    }
  }
}

export default new MessageController();
