import { Router } from "express";
import { authUser } from "../middleware/auth.middleware.js";
import { deleteChat, getChats, getMessages, sendMessage } from "../controllers/chat.controller.js";

const chatRouter = Router();

/**
 * @route POST /api/chats/message
 * @desc Send a message in the chat
 * @access Private
 */
chatRouter.post("/message", authUser, sendMessage);

/**
 * @route GET /api/chats
 * @desc Get all chats for the logged-in user
 * @access Private
 */
chatRouter.get("/", authUser, getChats);

/**
 * @route GET /api/chats/:chatId/messages
 * @desc Get all messages for a specific chat
 * @access Private
 */
chatRouter.get("/:chatId/messages", authUser, getMessages);

chatRouter.delete("/delete/:chatId", authUser, deleteChat);

export default chatRouter;
