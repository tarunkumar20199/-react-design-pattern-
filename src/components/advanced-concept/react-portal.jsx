import { useState } from "react";
import { createPortal } from "react-dom";
import "./react-portal.css";

export const ReactPortal = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClickCapture={() => console.log("outer div")}
      style={{ position: "absolute", marginTop: "200px" }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
};

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div
      onClickCapture={() => {
        onClose();
        console.log("Inner Div");
      }}
      className="alert"
    >
      {children}
    </div>,
    document.querySelector("#alert-holder")
  );
};
