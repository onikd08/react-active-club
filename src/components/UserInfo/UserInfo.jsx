import React from "react";
import "./Userinfo.css";
const UserInfo = () => {
  return (
    <div className="userinfo-container">
      <div className="userinfo">
        <h3>
          75<small>kg</small>
        </h3>
        <h3>7.55</h3>
        <h3>
          25<small>yrs</small>
        </h3>
      </div>
      <div className="userinfo">
        <p>Weight</p>
        <p>Height</p>
        <p>Age</p>
      </div>
    </div>
  );
};

export default UserInfo;
