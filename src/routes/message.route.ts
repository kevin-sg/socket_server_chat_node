import express from "express";

import * as Controller from "@/controllers";
import * as Middleware from "@/middlewares";

class MessageRoute {
  public route: express.IRouter;

  constructor() {
    this.route = express.Router();

    this.routerGet();
  }

  private routerGet() {
    this.route.get("/:from", [Middleware.validateJWT], Controller.MessageController.getMessages);
  }
}

export default new MessageRoute().route;
