import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";

export async function registerUserController(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All Fields are Required ",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User Already Exists with this username & email",
      success: false,
      err: "User Already Exists",
    });
  }

  // const hashPassword = await bcryptjs.hash(password, 10); Already hashed while saving password in Database
  const user = await userModel.create({
    username,
    email,
    password,
  });


  // Help to send Mail while Register
  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity!",
    html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `,
  });

  res.status(201).json({
    message: "User registered successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

export async function loginUserController(req, res) {}

export async function logoutUserController(req, res) {}

export async function getMeController(req, res) {}
