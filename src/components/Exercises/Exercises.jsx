import React, { useEffect, useState } from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { Row } from "react-bootstrap";

const Exercises = ({ handleAddToList }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <Row xs={1} md={3}>
      {exercises.map((exercise) => (
        <ExerciseCard
          handleAddToList={handleAddToList}
          key={exercise.id}
          exercise={exercise}
        ></ExerciseCard>
      ))}
    </Row>
  );
};

export default Exercises;
