import { useState } from "react";
// import { UncontrolledFlow } from "./uncontrol-flow";
import { ControlledFlow } from "./control-flow";
// import { ControlledModal } from "./controlled-modal";
const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={() => goNext({ name: "Adam" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={() => goNext({ age: "25" })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={() => goNext({ country: "India" })}>Next</button>
    </>
  );
};
export const ComponentsHandler = () => {
  //   const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };
  return (
    <>
      {/* <ControlledModal show={show} setShow={() => setShow(false)} ></ControlledModal>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      <ControlledFlow onNext={goNext} currentIndex={currentStepIndex}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledFlow>
    </>
  );
};
