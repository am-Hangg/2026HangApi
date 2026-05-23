
import mongoose from "mongoose";
import config  from "./config.js";


function connectDB () {
  mongoose
  .connect(config.mongodbUrl)
  .then (() => {
   console.log("MongoDB connected successfully, you can do!!....");
  })
  .catch((error) => {
   console.log(error);
  });
}


export default connectDB;