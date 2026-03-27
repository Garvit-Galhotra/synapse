import { userModel } from "../models/user.model.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // check if user already exists
    const userExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hasing password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating user

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // creating token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" },
    );
    // setting token in cookie db
    res.cookie("token", token);

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    // return res.status(500).json({ message: "Server error" });
    throw err;
  }
};
