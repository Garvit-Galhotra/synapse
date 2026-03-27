import express from "express";
import cookieParser from "cookie-parser";

export const app = express();

// adding middlewares
app.use(express.json());
app.use(cookieParser());

// importing Routes
import { authRouter } from "./routes/auth.routes.js";

// using Routes
app.use("/api/auth", authRouter);
