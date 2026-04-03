import { Server } from "socket.io";


// Server Side Setup of Socket.io
let io;

// Initialize Socket.io Server 
export function initSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  console.log("SocketIo Server is Running");

  // Listen for client connections
  io.on("connection", (socket) => {
    console.log("A user is Connected " + socket.id);
  });
}

// Function to get the Socket.io instance  
export function getIo() {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
}
