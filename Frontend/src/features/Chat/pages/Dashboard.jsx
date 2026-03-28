import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Redux ke andar konsi bhi state access karni hoti hai tho useSelector ka use karna hota hai
import { useChat } from "../hooks/useChat";

const Dashboard = () => {
  const chat = useChat();

  // jho bhi user rhega dashboard pe usko log kar dena
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  // Calling Initialize function to connect client and Server
  useEffect(() => {
    chat.initializeSocketConn();
  }, []);

  return (
    <div className="bg-black text-white w-screen h-screen ">Dashboard</div>
  );
};

export default Dashboard;
