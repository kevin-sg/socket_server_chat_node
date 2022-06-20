import mongoose, { Schema, Model, model } from "mongoose";

import { EnumEntityKey, IUserEntity } from "@/global";

const UserSchema = new Schema(
  {
    name     : { type: String, required: true },
    email    : { type: String, required: true },
    password : { type: String, required: true },
    online   : { type: Boolean, default: false },
  },
  { timestamps: true },
);

UserSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, password, ...user } = this.toObject();
  return { uid: _id, ...user };
};

const User: Model<IUserEntity> = mongoose.models.user || model(EnumEntityKey.USER, UserSchema);

export default User;
