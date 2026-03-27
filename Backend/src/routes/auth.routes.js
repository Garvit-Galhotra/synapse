import Router from "express";

export const authRouter = Router();

// importing controllers
import { registerUser } from "../controllers/auth.controller.js";

// importing validators
import { registerValidation, validate } from "../validator/auth.validator.js";

// creating APIs

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", registerValidation(), validate, registerUser);
