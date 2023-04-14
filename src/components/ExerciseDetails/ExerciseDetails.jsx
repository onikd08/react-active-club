import React from "react";
import { getDataFromLocalStorage } from "../../utilities/localStorage";
const ExerciseDetails = ({ breakTime, exerciseTime }) => {
  const { relax, exercise } = getDataFromLocalStorage();
  const displayExercise = exercise || exerciseTime;
  const displayBreak = relax || breakTime;
  return (
    <div>
      <h3>Exercise Details</h3>
      <p>Exercise Time: {displayExercise} min</p>
      <p>Break Time: {displayBreak} min</p>
      <p>Total Time: {displayExercise + displayBreak}</p>
    </div>
  );
};

export default ExerciseDetails;
