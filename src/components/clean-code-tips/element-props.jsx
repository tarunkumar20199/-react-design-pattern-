import Button from "./button";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
};

export const ElementProp = () => {
  return (
    <div style={style}>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
      <Button As="a" size="l" href="/">
        Link
      </Button>
    </div>
  );
};
