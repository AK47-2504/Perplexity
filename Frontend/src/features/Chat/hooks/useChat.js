import { initializeSocketConn } from "../services/chat.socket";

export const useChat = () => {
  return { initializeSocketConn };
};
