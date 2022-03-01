import "../App.css";
import React from "react";
import Text from "react-text-typing";

const Typed = () => {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <Text text="mebee info" showBlink={true} component="h1" />
      </div>
    </div>
  );
};

export default Typed;
