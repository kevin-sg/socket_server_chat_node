import { check } from "express-validator";
import express from "express";

import { dbValidator } from "@/middlewares";
import { AuthController } from "@/controllers";

class AuthRoute {
  public authRouter: express.IRouter;

  public constructor() {
    this.authRouter = express.Router();

    this.routerLoginPost();
    this.routerRenewPost();
  }

  // POST /api/login
  private routerLoginPost() {
    this.authRouter.post(
      "/",
      [
        check("email", "The name is required").isEmail(),
        check("password", "The password is required").notEmpty(),
        dbValidator,
      ],
      AuthController.loginAuth,
    );
  }

  // POST /api/login/renew
  public routerRenewPost() {
    this.authRouter.post("/renew", AuthController.revalidedTokenAuth);
  }
}

export default new AuthRoute().authRouter;
