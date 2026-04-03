import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
import http from "http"; // Importing the HTTP module to create a server
import { initSocket } from "./src/sockets/server.socket.js"; 

connectToDB();

// Create an HTTP server using the Express app
const httpServer = http.createServer(app);

// Initialize Socket.io with the HTTP server
initSocket(httpServer);

// Start the server and listen on the specified port
httpServer.listen(3000, () => {
  console.log("Server is Listening to PORT 3000");
});
