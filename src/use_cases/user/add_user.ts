import bcrypt from "bcryptjs";

import type { ICreateUserProps, IResultUserWithToken } from "@/global";
import * as Entity from "@/entities";
import * as Utility from "@/utilities";

export async function createUser({ name, email, password }: ICreateUserProps): Promise<IResultUserWithToken> {
  const hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const user = await Entity.User.create({ name, email, password: hashedPassword });

  const token = await Utility.generateJWT({ uid: user?._id.toString() || "" });

  return { user, token };
}
