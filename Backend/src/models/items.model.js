import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "user",
    required: true,
  },
  type: {
    type: String,
    enum: ["link", "image", "video", "pdf"],
    required: [
      true,
      "Type is required and must be one of link, image, video, pdf",
    ],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  embeddings: {
    type: [Number],
    required: [true, "Embeddings are required"],
  },
  tags: {
    type: [String],
    default: [],
  },
});

export const itemModel = mongoose.model("item", itemSchema);
