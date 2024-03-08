export const Button = ({ size, color, text }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button {...props} color="red" />;
};

export const GreenSmallButton = (props) => {
  return <Button {...props} color="green" size="small" />;
};
