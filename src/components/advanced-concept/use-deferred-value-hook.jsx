import { useDeferredValue, useState } from "react";
import { UseDeferredValueHandler } from "./use-deferred-value";
export const UseDeferredValue = () => {
  const [keyword, setKeyWord] = useState("");

  const deferredKeyword = useDeferredValue(keyword);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyWord(e.target.value)} />
      <UseDeferredValueHandler keyword={deferredKeyword} />
    </>
  );
};
