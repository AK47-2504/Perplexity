import { io } from "socket.io-client";

// Connecting Client with Server 
export const initializeSocketConn = () => {

  const socket = io("http://localhost:3000", {
    withCredentials: true,
  });

  // After Connection Log Connected
  socket.on("connect", () => {
    console.log("Connected to SocketIo Server");
  });
};

 // This file is responsible for establishing a connection between the client and the Socket.io server. It imports the `io` function from the `socket.io-client` library and defines a function `initializeSocketConn` that creates a socket connection to the server at "http://localhost:3000". The connection is established with credentials, and upon successful connection, it logs a message to the console. 