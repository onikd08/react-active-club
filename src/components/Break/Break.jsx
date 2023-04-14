import React from "react";
import ButtonAddABreak from "../ButtonAddABreak/ButtonAddABreak";

const Break = ({ exerciseTime }) => {
  return (
    <div>
      <h3>Add a Break</h3>
      <ButtonAddABreak exerciseTime={exerciseTime}></ButtonAddABreak>
    </div>
  );
};

export default Break;
