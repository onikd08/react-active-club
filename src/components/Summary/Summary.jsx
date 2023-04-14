import React from "react";
import User from "../User/User";
import UserInfo from "../UserInfo/UserInfo";
import "./Summary.css";
import Break from "../Break/Break";
import ToastComponent from "../ToastComponent/ToastComponent";

const Summary = ({ exerciseTime }) => {
  return (
    <div className="summary-container">
      <User></User>
      <UserInfo></UserInfo>
      <Break exerciseTime={exerciseTime}></Break>
      <ToastComponent></ToastComponent>
    </div>
  );
};

export default Summary;
