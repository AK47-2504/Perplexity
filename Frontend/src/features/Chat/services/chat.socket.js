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
