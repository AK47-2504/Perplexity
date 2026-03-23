import React from "react";
import { useSelector } from "react-redux";
// Redux ke andar konsi bhi state access karni hoti hai tho useSelector ka use karna hota hai

const Dashboard = () => {
  // jho bhi user rhega dashboard pe usko log kar dena
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return <div className="bg-black text-white w-screen h-screen ">Dashboard</div>;
};

export default Dashboard;
