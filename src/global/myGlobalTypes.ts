import type { Request } from "express";
import * as mongoose from "mongoose";
import JWT from "jsonwebtoken";

// *******************************************************
// *              This is environment variables          *
// *******************************************************

export interface IEnvironmentVariables {
  HOST_PORT: number;
  HOST_CLIENT: string;
  MONGODB_URI: string;
  COOKIE_V1_KEY: string;
  TOKEN_EXPIRATION_TIME: string;
  SECRET_TOKEN_PRIVATE_KEY: string;
}

// *******************************************************
// *             This is type Entity                     *
// *******************************************************

export interface IUserEntity {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  online: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMessageEntity {
  _id: mongoose.Types.ObjectId;
  from: string;
  subject: string;
  message: string;
}

// *******************************************************
// *            This is type custom Request              *
// *******************************************************

export interface IPayloadUserIdWithToken {
  uid: string & JWT.JwtPayload;
}

export interface IRequestWithUserProps extends Request {
  user?: IPayloadUserIdWithToken;
}

// *******************************************************
// *         This is type return & props function        *
// *******************************************************

export interface IResultUserWithToken {
  user: IUserEntity | null;
  token: string | Error | undefined;
}

export interface ICreateUserProps {
  name: string;
  email: string;
  password: string;
}

export interface IGetMessagesProps {
  uid: string;
  subject: string;
  limit: number;
}
