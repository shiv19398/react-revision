import React from "react";

const InlineStyling = () => {
  const heading = {
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
};

export default InlineStyling;
