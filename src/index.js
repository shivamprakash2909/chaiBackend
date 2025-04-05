import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
connectDB();

then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port:${process.env.PORT}`);
  });
}).catch((error) => {
  console.log("Mongo db connection FAILED:", error);
});

//approach 1: effi function
/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
})();*/
