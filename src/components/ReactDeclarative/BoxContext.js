import React, { createContext, useContext } from "react";
import "../../styles/mystyles.css";

const ThemeContext = createContext("Light");
const useTheme = () => useContext(ThemeContext);

function Button({ text }) {
  const theme = useTheme();

  return (
    <button className={`Button Button--${theme}`}>
      ({theme}) {text}
    </button>
  );
}

function BoxContext({ theme }) {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`Box Box--${theme}`}>
        <p>{`${theme} box`}</p>

        {Button({ text: "button" })}
      </div>
    </ThemeContext.Provider>
  );
}

export default BoxContext;
