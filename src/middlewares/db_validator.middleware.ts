import Validator from "express-validator";
import bcrypt from "bcryptjs";

import * as Entity from "@/entities";

export async function isEmailUser(email: string) {
  const user = await Entity.User.findOne({ email });
  if (user) {
    throw new Error("Email is already in use");
  }
  return true;
}

export async function isPasswordUser(password: string, { req }: Validator.Meta) {
  const { email } = req.body;
  const user = await Entity.User.findOne({ email });

  // Check password
  const isPasswordValid = await bcrypt.compare(password, user?.password || "");
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  return true;
}
