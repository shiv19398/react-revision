import React from "react";

const Hello = () => {
  //with JSX
  //   return (
  //     <div>
  //       <h1>Hello Shiv</h1>
  //     </div>
  //   );

  //React.createElement() method is used internally to convert jsx into html or if you do not want to write the jsx in React code.
  //it accepts three parameters:-
  //first:- html tag
  //second:- additional properties like id, class for the tag
  //third:- value
  //   return React.createElement("div", null, `Hello Shiv`);
  //aforementioned code displays hello world but it is not in h1

  //to put h1 tag inside div then we have to do this:-
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", null, "Hello Shiv")
  //   );
  //as you can see just to put h1 inside div we have to do this clumsy work suppose there are 10 elements, then it is going to be very messy.
  //therefore, jsx is syntactic sugar which makes our code look simpler and manageable.

  //now we are going to talk about the second parameter which we are ignoring.
  //this second parameter is a key-value pair,i.e, js object where you pass additional parameters like id, class for that html element like this:-
  return React.createElement(
    "div",
    { id: "fun", className: "dummy" },
    "Hello Shiv"
  );
  //if you go to the console and check out the this div tag containing hello shiv has id="fun" and class='dummy'
};

export default Hello;
