import { useRef } from "react";
import { UseImaparativeHandler } from "./use-imparative-handler";

export const UseImparativeHook = () => {
  const inputRef = useRef();

  return (
    <>
      <UseImaparativeHandler type="text" ref={inputRef} />
      <button className="button" onClick={() => inputRef.current.sayHello()}>
        Focus
      </button>
    </>
  );
};
