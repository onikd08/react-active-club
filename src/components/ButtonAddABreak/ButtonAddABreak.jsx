import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import {
  getDataFromLocalStorage,
  storeDataInLocalStorage,
} from "../../utilities/localStorage";

const ButtonAddABreak = ({ exerciseTime }) => {
  const [checked, setChecked] = useState(false);
  const [breakTime, setBreakTime] = useState(0);
  const breakTimes = [
    { name: "10min", value: 10 },
    { name: "20min", value: 20 },
    { name: "30min", value: 30 },
    { name: "40min", value: 40 },
  ];
  const { relax } = getDataFromLocalStorage();
  const handleBreakButton = (event) => {
    const time = parseInt(event.currentTarget.value);
    setBreakTime(time);
    storeDataInLocalStorage("relax", time);
  };
  return (
    <>
      <ButtonGroup>
        {breakTimes.map((item, idx) => (
          <ToggleButton
            key={idx}
            id={`breakTime-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="breakTime"
            value={item.value}
            checked={relax == item.value}
            onChange={(e) => {
              handleBreakButton(e);
            }}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ExerciseDetails
        exerciseTime={exerciseTime}
        breakTime={breakTime}
      ></ExerciseDetails>
    </>
  );
};

export default ButtonAddABreak;
