import React from "react";
const userInput = (props) => {
  const style = {
    marginTop: "2em",
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.changed}
      value={props.currentValue}
    />
  );
};
export default userInput;
