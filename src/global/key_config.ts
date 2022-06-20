// *******************************************************
// *                Event Key                            *
// *******************************************************

export enum EnumSocketEventKey {
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
  MESSAGE_TO_SERVER = "message_to_server",
  MESSAGE_FROM_SERVER = "message_from_server",
}

// *******************************************************
// *               Socket Event Key                      *
// *******************************************************

export enum EnumHttpStatusCodes {
  OK = 200,
  CREATE = 201,
  BAD_REQUEST = 400,
  UNAUTHOTIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export enum EnumHttpStatusMessages {
  OK = "Everything worked as expected.",
  CREATE = "Successful creation occurred.",
  BAD_REQUEST = "The request was unacceptable, often due to missing a required parameter.",
  UNAUTHOTIZED = "No valid API key provided.",
  NOT_FOUND = "The requested resource doesn't exist.",
  INTERNAL_SERVER = "Something went wrong.",
}

// *******************************************************
// *               Entity Key                            *
// *******************************************************

export enum EnumEntityKey {
  USER = "User",
  MESSAGE = "Message",
}

// *******************************************************
// *               Path Api Version                      *
// *******************************************************

export enum EnumPathApiVersion {
  V1 = "/api/v1",
  V2 = "/api/v2",
}

// *******************************************************
// *               Path Router v1                        *
// *******************************************************

export enum EnumPathRouteV1 {
  USER = "/api/v1/user",
  LOGIN = "/api/v1/login",
  MESSAGE = "/api/v1/message",
}
