import { useState, useCallback } from "react";

export const UseCallbackHook = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useCallback((input) => {
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShowInput(!showInput)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
};
