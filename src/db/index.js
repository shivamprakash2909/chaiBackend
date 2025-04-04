import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstznce = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!!  DB Host: ${connectionInstznce.connection.host} \n`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};
export default connectDB;
