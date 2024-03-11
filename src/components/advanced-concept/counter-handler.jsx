import { useState } from "react";
import { Counter } from "./counter";

export const CounterHandler = () => {
  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts:</span>
          <Counter key="shirts" />
        </>
      ) : (
        <>
          <span>Shoes counts:</span>
          <Counter key="shoes" />
        </>
      )}
      <br />
      <button onClick={() => setChangeShirts(!changeShirts)}>Switch</button>
    </div>
  );
};
