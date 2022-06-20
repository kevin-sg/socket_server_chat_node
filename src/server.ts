import cockieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import * as DB from "@/database";
import * as Routes from "@/routes";
import * as Global from "@/global";

class Server {
  private app: express.Application;
  private port: number;

  public constructor() {
    this.app = express();
    this.port = Global.environmentVariables.HOST_PORT;

    // Database connection
    this.connectToDB();

    // Middleware
    this.middlaware();

    // Routes
    this.routes();
  }

  private async connectToDB() {
    await DB.connectToDatabase();
  }

  private middlaware() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(cockieParser());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(Global.EnumPathRouteV1.USER, Routes.UserRoute);
    this.app.use(Global.EnumPathRouteV1.LOGIN, Routes.AuthRoute);
    this.app.use(Global.EnumPathRouteV1.MESSAGE, Routes.MessageRoute);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log("\x1b[36m", `Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
