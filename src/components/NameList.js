import React from "react";
import Person from "./Person";

//suppose you have a list and you need to render that list on the browser with some html applied to every list element.
//for this, we can use map() method
//as we know map accepts a function and returns a new array applying that function to every element in the array
function NameList(props) {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 28,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const names = ["Bruce", "clark", "diana"];
  const nameList = names.map((name) => <h1>{name}</h1>);

  //   return (
  //we can take out this map logic outside of return statement and make it as a element and then render it direcly in the return
  //although the working will be the same but our code looks more simpler
  // <div>
  //   {names.map((name) => (
  //     <h1>{name}</h1>
  //   ))}
  // </div>
  //   );

  //see how our return becomes so simplified

  //this is the recommended way to render a list and you need to apply some html to the list elements and render it on the browser.
  //create a seperate component and pass values as prop to the component which seperates the ui and ui logic.
  //We must include a key prop when rendering a list which must be unique.
  //When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
  //do not use key prop to render any data in our component
  //A key is a special string attribute you need to include when creating lists of elements.
  //Keys give the elements a stable identity.
  //keys help React identify which items have changed, are added, or are removed
  //Help in efficient update of the user interface
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {nameList}
      {personList}
    </div>
  );
}

export default NameList;
