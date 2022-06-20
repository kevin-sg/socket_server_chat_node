import JWT from "jsonwebtoken";

import * as Global from "@/global";

export function generateJWT(payload: { [x: string]: string }): Promise<string | Error | undefined> {
  return new Promise((res, rej) => {
    // Expires in .env TOKEN_EXPIRATION_TIME
    JWT.sign(
      payload,
      Global.environmentVariables.SECRET_TOKEN_PRIVATE_KEY,
      { expiresIn: Global.environmentVariables.TOKEN_EXPIRATION_TIME },
      (err, token) => {
        return err ? rej(err) : res(token);
      },
    );
  });
}
