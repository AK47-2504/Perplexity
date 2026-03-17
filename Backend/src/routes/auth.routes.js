import { Router } from "express";
import { registerUserController } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();


/**
 * @route /api/auth/register
 * @description Register User
 * @access Public
 * @body {username, email, password}
 */
authRouter.post("/register", registerValidator, registerUserController);

export default authRouter;
