import mongoose from "mongoose";

import * as Global from "@/global";

if (!Global.environmentVariables.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

export async function connectToDatabase(): Promise<mongoose.Mongoose | void> {
  try {
    await mongoose.connect(Global.environmentVariables.MONGODB_URI, option);
    // eslint-disable-next-line no-console
    console.log("\x1b[34m", "Connented to MongoDB!!");
  } catch (err) {
    process.exit(1);
  }
}
