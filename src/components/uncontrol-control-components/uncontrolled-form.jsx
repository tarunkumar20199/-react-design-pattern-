import React from "react";

export const UncontrolledForm = () => {
  const nameRef = React.createRef();
  const ageRef = React.createRef();

  const submitHandler = (e) => {
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Age:
        <input type="number" ref={ageRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
