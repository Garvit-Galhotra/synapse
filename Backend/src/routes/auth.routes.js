import Router from "express";

export const authRouter = Router();

// importing controllers
import { registerUser, loginUser } from "../controllers/auth.controller.js";

// importing validators
import {
  registerValidation,
  validateRegister,
  loginValidator,
  validateLogin,
} from "../validator/auth.validator.js";

// creating APIs

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post(
  "/register",
  registerValidation(),
  validateRegister,
  registerUser,
);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */

authRouter.post("/login", loginValidator(), validateLogin, loginUser);
