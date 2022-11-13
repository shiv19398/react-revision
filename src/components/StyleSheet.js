import React from "react";
import "../styles/mystyles.css";

const StyleSheet = (props) => {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      {/* basic way to style our elements  */}
      {/* importing css file in the component and using classname to style the elements */}
      {/* <h1 className="primary">StyleSheets</h1> */}

      {/* conditionally applying classes to our elements */}
      <h1 className={className}>StyleSheets</h1>
    </div>
  );
};

export default StyleSheet;
