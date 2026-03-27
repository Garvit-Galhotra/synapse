import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "user",
    required: [true, "User is required"],
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
    required: [true, "Item is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    default: "",
  },
  itemIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "item",
    default: [],
  },
});

export const listItemModel = mongoose.model("listItem", listItemSchema);
