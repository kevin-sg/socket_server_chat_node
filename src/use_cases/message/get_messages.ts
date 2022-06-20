import mongoose from "mongoose";

import * as Global from "@/global";
import * as Entity from "@/entities";

export async function getMessages({ uid, subject, limit = 10 }: Global.IGetMessagesProps) {
  const query: mongoose.FilterQuery<Global.IMessageEntity> = {
    query: {
      $or: [
        { from: uid, subject },
        { from: subject, subject: uid },
      ],
    },
    limit,
  };
  const messages = await Entity.Message.find({ query }).sort({ createdAt: -1 }).limit(limit);

  return { messages };
}
