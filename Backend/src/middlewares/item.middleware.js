import { itemModel } from "../models/items.model.js";

export const checkItemExists = async (req, res, next) => {
  const { itemId } = req.params;
  const username = req.user.username;
  try {
    const item = await itemModel
      .findOne({ _id: itemId, user: username })
      .select("-embeddings");
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    req.item = item;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error checking item" });
  }
};

export const checkItem = async (req, res, next) => {
  const username = req.user.username;

  try {
    const item = await itemModel
      .findOne({ user: username })
      .select("-embeddings");
    if (!item) {
      return res.status(404).json({ message: "No items found for the user" });
    }
    req.item = item;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error checking item" });
  }
};
