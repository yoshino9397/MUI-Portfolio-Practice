import ReactTypingEffect from "react-typing-effect";
import "../App.css";
import React from "react";

const Typing = () => {
  return (
    <>
      <ReactTypingEffect text={["Hello.", "World!"]} />

      <br />

      <ReactTypingEffect
        text={["Hello.", "World!!!"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i % 2 === 0 ? { color: "magenta" } : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default Typing;
