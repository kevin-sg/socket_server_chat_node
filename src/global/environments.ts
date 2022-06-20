import * as Global from "@/global";

export const environmentVariables: Global.IEnvironmentVariables = {
  HOST_PORT: parseInt(process.env.PORT as string),
  HOST_CLIENT: process.env.HOST_CLIENT as string,
  MONGODB_URI: process.env.MONGODB_URI as string,
  COOKIE_V1_KEY: process.env.COOKIE_V1_KEY as string,
  TOKEN_EXPIRATION_TIME: process.env.TOKEN_EXPIRATION_TIME as string,
  SECRET_TOKEN_PRIVATE_KEY: process.env.SECRET_TOKEN_PRIVATE_KEY as string,
};
