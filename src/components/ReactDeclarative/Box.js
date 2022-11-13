import React from "react";
import "../../styles/mystyles.css";

function Button({ text, theme }) {
  return (
    <button className={`Button Button--${theme}`}>
      ({theme}) {text}
    </button>
  );
}

function Box({ theme }) {
  return (
    <div className={`Box Box--${theme}`}>
      <p>{`${theme} box`}</p>

      {Button({ text: "button", theme })}
    </div>
  );
}

export default Box;
