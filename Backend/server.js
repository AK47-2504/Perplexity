import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import { testAI } from "./src/services/ai.service.js";

connectToDB();

testAI();

app.listen(3000, () => {
  console.log("Server is Listening to PORT 3000");
});
