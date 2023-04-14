import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ExerciseCard = ({ exercise, handleAddToList }) => {
  //const [disabled, setDisabled] = useState(false);
  const { exerciseName, description, ageGroup, timeRequired } = exercise;
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{exerciseName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            Age group: <small>{ageGroup}</small>
          </Card.Text>
          <Card.Text>
            Time Required: <small>{timeRequired}</small>
          </Card.Text>

          <Button
            //disabled={disabled}
            onClick={() => {
              handleAddToList(exercise);
              //setDisabled(true);
            }}
            variant="primary"
          >
            Add to List
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExerciseCard;
