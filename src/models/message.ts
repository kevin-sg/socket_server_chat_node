import mongoose, { Schema, Model, model } from "mongoose";

import { IUserModel } from "@/global";

const MessageSchema = new Schema(
  {
    to: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

MessageSchema.methods.toJSON = function () {
  const { __v, _id, ...message } = this.toObject();
  return { id: _id, ...message };
};

const Message: Model<IUserModel> = mongoose.models.message || model("Message", MessageSchema);

export default Message;
