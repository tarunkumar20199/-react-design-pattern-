import { useImperativeHandle, forwardRef } from "react";

export const UseImaparativeHandler = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      sayHello: () => {
        alert("Helloooooooo!");
      },
    };
  });
  return <input {...props} className="text-input" />;
});
