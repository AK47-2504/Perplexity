import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import http from "http";
import { initSocket } from "./src/sockets/server.socket.js";

connectToDB();
const httpServer = http.createServer(app);

initSocket(httpServer);
httpServer.listen(3000, () => {
  console.log("Server is Listening to PORT 3000");
});
