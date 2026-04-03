import { generateResponse, generateChatTitle } from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";

/**
 * sendMessage function is responsible for handling the logic of sending a message in a chat conversation. It takes the user's message and the chat ID (if it exists) from the request body. If the chat ID is not provided, it generates a title for the chat based on the user's message and creates a new chat document in the database associated with the user. Then, it creates a new message document in the database for the user's message and associates it with the chat. Next, it retrieves all messages associated with the chat from the database and passes them to the AI model to generate a response. Finally, it creates a new message document in the database for the AI's response and associates it with the chat before sending a response back to the client with the title, chat information, and AI message.
 */
export async function sendMessage(req, res) {
  const { message, chat: chatId } = req.body;

  let title = null,
    chat = null;

  if (!chatId) {
    // Generate a title for the chat based on the user's message
    title = await generateChatTitle(message);

    // Create a new chat document in the database with the generated title and associate it with the user
    chat = await chatModel.create({
      user: req.user.id,
      title,
    });
  }

  // Create a new message document in the database for the user's message and associate it with the chat
  const userMessage = await messageModel.create({
    chat: chatId || chat.id || chat._id,
    content: message,
    role: "user",
  });

  // Retrieve all messages associated with the chat from the database and pass them to the AI model to generate a response
  const messages = await messageModel.find({
    chat: chatId || chat.id || chat._id,
  });

  // Generate a response from the AI model based on the user's message and the retrieved messages

  const result = await generateResponse(messages);

  // Create a new message document in the database for the user's message and associate it with the chat
  const aiMessage = await messageModel.create({
    chat: chatId || chat.id || chat._id,
    content: result,
    role: "ai",
  });

  res.status(201).json({
    title,
    chat,
    aiMessage,
  });
}

/**
 * getChats function is responsible for retrieving all chats associated with the logged-in user.
 */
export async function getChats(req, res) {
  const user = req.user.id;

  const chats = await chatModel.find({ user });

  res.status(200).json({
    message: "Chats retrieved successfully",
    chats,
  });
}

/**
 * getMessages function is responsible for retrieving all messages associated with a specific chat conversation. It takes the chat ID from the request parameters and checks if the chat exists and is associated with the logged-in user. If the chat is found, it retrieves all messages associated with that chat from the database and sends them back in the response. If the chat is not found, it sends a 404 response indicating that the chat was not found.
 */
export async function getMessages(req, res) {
  const { chatId } = req.params;

  const chat = await chatModel.findOne({
    _id: chatId,
    user: req.user.id,
  });

  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }

  const messages = await messageModel.find({
    chat: chatId,
  });

  res.status(200).json({
    message: "Messages retrieved successfully",
    messages,
  });
}

/**
 * deleteChat function is responsible for deleting a specific chat conversation and all associated messages.
 */
export async function deleteChat(req, res) {
  const { chatId } = req.params;

  const chat = await chatModel.findOneAndDelete({
    _id: chatId,
    user: req.user.id,
  });

  await messageModel.deleteMany({
    chat: chatId,
  });

  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }
  res.status(200).json({
    message: "Chat deleted successfully",
  });
}
