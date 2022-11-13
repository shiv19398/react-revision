// What pure component is to class component, memo is to functional component.
//as we cannot implement pure component to functional component.

import React from "react";

const MemoComponent = ({ name }) => {
  console.log("Rendering memo Component");
  return <div>{name}</div>;
};

export default React.memo(MemoComponent);
