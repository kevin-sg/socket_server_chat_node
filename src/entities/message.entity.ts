import mongoose, { Schema, Model, model } from "mongoose";

import { EnumEntityKey, IMessageEntity } from "@/global";

const MessageSchema = new Schema(
  {
    from    : { type: Schema.Types.ObjectId, ref: EnumEntityKey.USER, required: true },
    subject : { type: Schema.Types.ObjectId, ref: EnumEntityKey.USER, required: true },
    message : { type: String, required: true },
  },
  { timestamps: true },
);

MessageSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...message } = this.toObject();
  return { id: _id, ...message };
};

const Message: Model<IMessageEntity> = mongoose.models.message || model(EnumEntityKey.MESSAGE, MessageSchema);

export default Message;
