import React from "react";
import Header from "../Header/Header";
import Exercises from "../Exercises/Exercises";
import "./LandingPage.css";

const LandingPage = ({ handleAddToList }) => {
  return (
    <div className="landing-page-container">
      <Header></Header>
      <Exercises handleAddToList={handleAddToList}></Exercises>
    </div>
  );
};

export default LandingPage;
