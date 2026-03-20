import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

export async function testAI() {
  model
    .invoke("Your review on OpenAI in 100 words? is it good from Google Gemini")
    .then((response) => console.log(response.text));
}
