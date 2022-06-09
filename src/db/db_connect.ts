import "dotenv/config";
import mongoose, { ConnectOptions, Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

export async function connectToDatabase(): Promise<Mongoose | void> {
  try {
    await mongoose.connect(MONGODB_URI, option);
    // eslint-disable-next-line no-console
    console.log("\x1b[32m", "Connented to MongoDB!!");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
}
