import express from "express";

import * as Middleware from "@/middlewares";
import * as Controller from "@/controllers";

class UserRoute {
  public userRoute: express.IRouter;

  public constructor() {
    this.userRoute = express.Router();

    this.routeGet();
    this.routePost();
    this.routePut();
    this.routeDelete();
  }

  //* GET /api/v1/user
  private routeGet() {
    this.userRoute.get("/", Controller.UserController.getUser);
  }

  //* POST /api/v1/user
  private routePost() {
    this.userRoute.post(
      "/",
      Middleware.validateFieldOfCreaterUser,
      Middleware.validateResultField,
      Controller.UserController.postUser,
    );
  }

  //* PUT /api/v1/user/:id
  private routePut() {
    this.userRoute.post(
      "/:id",
      [
        //* validation
      ],
      Controller.UserController.updateUser,
    );
  }

  //* DELETE /api/v1/user/:id
  private routeDelete() {
    this.userRoute.post(
      "/:id",
      [
        //* validation
      ],
      Controller.UserController.deleteUser,
    );
  }
}

export default new UserRoute().userRoute;
