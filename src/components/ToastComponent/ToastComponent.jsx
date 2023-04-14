import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

const ToastComponent = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <Button size="lg" onClick={toggleShow} className="mb-2">
        Complete Activity
      </Button>
      <ToastContainer position="middle-center">
        <Toast bg="info" onClose={toggleShow} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Congratulations!!!</strong>
          </Toast.Header>
          <Toast.Body>You've Completed your activity!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ToastComponent;
