import Router from "express";

export const itemsRouter = Router();

// importing middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkItemExists, checkItem } from "../middlewares/item.middleware.js";

// importing controllers
import {
  saveItem,
  getItems,
  getItemById,
} from "../controllers/items.controller.js";

/**
 * @routes POST /api/item/save
 * @description Save an item to the database
 * @access Private
 */

itemsRouter.post("/save", authMiddleware, saveItem);

itemsRouter.get("/", authMiddleware, checkItem, getItems);

/**
 * @routes GET /api/item/:itemId
 * @description Get a specific item of the user from the database
 * @access Private
 */

itemsRouter.get("/:itemId", authMiddleware, checkItemExists, getItemById);
