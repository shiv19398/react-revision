import React from "react";

//props are immutable
//you cannot change the value of props
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} and your skill is {props.skill}
      </h1>
    </div>
  );
};

export default Greet;
