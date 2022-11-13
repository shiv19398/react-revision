import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("button Clicked");
  }
  return (
    <div>
      {/* Here as you see we do not put () after the clickHandler because if we do so , it will become a function call and that is not what we want. We want the handler to be function not a function call 
      An event handler must be function not a function call*/}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunctionClick;
