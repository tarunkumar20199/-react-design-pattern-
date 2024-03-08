// import { RecursiveComponent } from "./recursive";
import { GreenSmallButton, RedButton } from "./composition";

// const myNestedObject = {
//   key1: "value1",
//   key2: {
//     innerKey1: "innerValue1",
//     innerKey2: {
//       innerInnerKey1: "innerInnerValue1",
//       innerInnerKey2: "innerInnerValue2",
//     },
//   },
//   key3: "value3",
// };

export const FunctionalComponent = () => {
  return (
    <>
      <RedButton text="I am red!" />
      <GreenSmallButton text="I am green!" />
    </>
  );
};
