import { itemModel } from "../models/items.model.js";

/**
 * @routes POST /api/item/save
 * @description Save an item to the database
 * @access Private
 */

export const saveItem = async (req, res) => {
  const { type, title, embeddings, tags } = req.body;
  const username = req.user.username;

  try {
    const item = new itemModel({
      user: username,
      type,
      title,
      embeddings,
      tags,
    });
    await item.save();

    res.status(201).json({
      message: "Item saved successfully",
      item: {
        id: item._id,
        type: item.type,
        title: item.title,
        tags: item.tags,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving item" });
  }
};

/**
 * @routes GET /api/item/
 * @description Get all items of the user from the database
 * @access Private
 */

export const getItems = async (req, res) => {
  const username = req.user.username;

  try {
    const items = req.item;
    res.status(200).json({ message: "Items fetched successfully", items });
  } catch (err) {
    return res.status(500).json({ message: "Error fetching items" });
  }
};

/**
 * @routes GET /api/item/:itemId
 * @description Get a specific item of the user from the database
 * @access Private
 */

export const getItemById = async (req, res) => {
  const username = req.user.username;

  try {
    const item = req.item;
    res.status(200).json({ message: "Item fetched successfully", item });
  } catch (err) {
    return res.status(500).json({ message: "Error fetching item" });
  }
};
