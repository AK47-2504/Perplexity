import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, SystemMessage, AIMessage } from "langchain";

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.1-pro-preview",
  apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY,
});

/**
 * Function to generate a response from the AI model based on the user's message
HumanMessage is used to provide the user's message as input to the AI model, and the response from the model is returned as the generated response for the chat conversation. 
 */
export async function generateResponse(messages) {
  // if (!messages || messages.length === 0) {
  //   return "Please provide a message to start the conversation.";
  // }

  const response = await geminiModel.invoke(
    messages.map((msg) => {
      if (msg.role === "user") {
        return new HumanMessage(msg.content);
      } else if (msg.role === "ai") {
        return new AIMessage(msg.content);
      }
    }),
  );

  return response.text;
}

/**
 * Function to generate a title for the chat based on the user's message
SystemMessage provides instructions to the AI model on how to generate the title, 
while HumanMessage provides the content of the chat conversation for which the title needs to be generated. 
The response from the AI model is then returned as the generated title for the chat conversation.
 */
export async function generateChatTitle(message) {
  const response = await mistralModel.invoke([
    new SystemMessage(`You are a helpful assistant that generates concise and descriptive titles for chat conversations.
      
      User will provide you with the content of a chat conversation, and your task is to generate a title that accurately reflects the main topic or theme of the conversation. The title should be concise, ideally no more than 2-5 words, and should capture the essence of the discussion in a clear and engaging way.
      `),

    new HumanMessage(
      `Generate a title for the following chat conversation: ${message}`,
    ),
  ]);

  return response.text;
}
