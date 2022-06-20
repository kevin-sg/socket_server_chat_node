import express from "express";

import * as Middleware from "@/middlewares";
import * as Controller from "@/controllers";

class AuthRoute {
  public authRouter: express.IRouter;

  public constructor() {
    this.authRouter = express.Router();

    this.routerPost();
    this.routerGet();
  }

  //* GET /api/v1/login/renew
  private routerGet() {
    this.authRouter.get("/renew", [Middleware.validateJWT], Controller.AuthController.revalidedTokenPost);
  }

  //* POST /api/v1/login
  private routerPost() {
    this.authRouter.post(
      "/",
      Middleware.validateFieldOfLogin,
      Middleware.validateResultField,
      Controller.AuthController.loginPost,
    );
  }
}

export default new AuthRoute().authRouter;
