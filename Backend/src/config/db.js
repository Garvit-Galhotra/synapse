import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    return console.log("Connected to MongoDB");
  });
};
