import React from "react";
//import "./User.css";
const User = () => {
  return (
    <div className="user-container">
      <div className="image">
        <img style={{ height: "75px" }} src="man.png" alt="" />
      </div>
      <div className="info">
        <h3>Zahid Hossain</h3>
        <small>Sydney, Australia</small>
      </div>
    </div>
  );
};

export default User;
