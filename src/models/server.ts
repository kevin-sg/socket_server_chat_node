import express from "express";
import morgan from "morgan";
import cors from "cors";

import { UserRoute, AuthRoute } from "@/routes";
import { TPathsRoute } from "@/models";
import { connectToDatabase } from "@/db";
import { environmentVariables } from "@/global";

class Server {
  private app: express.Application;
  private port: number;
  private paths: TPathsRoute;

  public constructor() {
    this.app = express();
    this.port = environmentVariables.HOST_PORT;
    this.paths = {
      user: "/api/user",
      login: "/api/login",
    };

    // Conntect to DB
    this.connectToDB();

    // Middleware
    this.middlaware();

    // Routes
    this.routes();
  }

  private async connectToDB() {
    await connectToDatabase();
  }

  private middlaware() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(this.paths.user, UserRoute);
    this.app.use(this.paths.login, AuthRoute);
  }

  public listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log("\x1b[36m", `Server listening on port: http://localhost:${this.port}`);
    });
  }
}

export default Server;
