import mongoose, { Schema, Model, model } from "mongoose";

import { IUserModel } from "@/global";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    online: { type: Boolean, default: false },
  },
  { timestamps: true },
);

UserSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject();
  return { uid: _id, ...user };
};

const User: Model<IUserModel> = mongoose.models.user || model("User", UserSchema);

export default User;
