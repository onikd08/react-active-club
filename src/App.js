import LandingPage from "./components/LandingPage/LandingPage";
import Summary from "./components/Summary/Summary";
import "./App.css";
import { useState } from "react";
import { storeDataInLocalStorage } from "./utilities/localStorage";

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);

  const handleAddToList = (exercise) => {
    const newExerciseTime = exercise.timeRequired + exerciseTime;
    setExerciseTime(newExerciseTime);
    storeDataInLocalStorage("exercise", newExerciseTime);
  };
  return (
    <div className="main-container">
      <LandingPage handleAddToList={handleAddToList}></LandingPage>
      <Summary exerciseTime={exerciseTime}></Summary>
    </div>
  );
}

export default App;
