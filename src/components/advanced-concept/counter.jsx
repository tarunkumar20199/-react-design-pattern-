import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => count > 0 && setCount((c) => c - 1)}>-</button>
    </>
  );
};
