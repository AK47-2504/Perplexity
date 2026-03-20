import { Router } from "express";
import {
  loginUserController,
  registerUserController,
  verifyEmailController,
  getMeController,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter = Router();

/**
 * @route /api/auth/register
 * @description Register User
 * @access Public
 * @body {username, email, password}
 */
authRouter.post("/register", registerValidator, registerUserController);
authRouter.post("/login", loginValidator, loginUserController);
authRouter.get("/get-me", authUser, getMeController);
authRouter.get("/verify-email", verifyEmailController);

export default authRouter;
