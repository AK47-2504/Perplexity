import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
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

  const emailVerificationToken = jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  // Help to send Mail while Register
  await sendEmail({
    to: email,
    subject: "Welcome to Perplexity!",
    html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Plese verift the Emial Address by clicking the link below: </p>
                  <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
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

export async function verifyEmailController(req, res) {
  const { token } = req.query;
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  const user = await userModel.findOne({ email: decoded.email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid Token",
      success: false,
      err: "User Not Found",
    });
  }

  user.verified = true;
  await user.save();

  const html = `
  <h1>Email Verified Successfully</h1>
  <p>Your Email has been verified, Now you canlogin your account</p>
  <a href="http://localhost:3000/login">Go to Login Page</a>
  `;
  res.send(html);
}

export async function loginUserController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All Field Required",
      success: false,
      err: "All Fields Required",
    });
  }

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      message: "Invalid Email or Password",
      success: false,
      err: "User Not Found",
    });
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return res.status(400).json({
      message: "Invalid Email or Password",
      success: false,
      err: "Incorrect Password",
    });
  }

  if (!user.verified) {
    return res.status(400).json({
      message: "Please verify your email before login",
      success: false,
      err: "Email not Verified",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "User Login Succesfully",
    success: true,
    user,
  });
}
export async function getMeController(req, res) {
  const { id } = req.user.id;

  const user = await userModel.findOne(id);

  if (!user) {
    return res.status(400).json({
      message: "User Not Found",
      success: "false",
      err: "User Not Found",
    });
  }

  return res.status(200).json({
    message: "User Fetched Successfully",
    success: true,
    user,
  });
}

export async function logoutUserController(req, res) {}
