import React, { useState } from "react";

const KeyBug = () => {
  const [techs, setTechs] = useState(["React", "Angular", "Vue", "Ember"]);

  const removeElement = (index) => {
    const newArray = techs.filter((tech) => {
      return tech !== techs[index];
    });

    console.log(newArray);

    setTechs(newArray);
  };
  return (
    <div>
      {techs.map((tech, index) => {
        return (
          <h1
            key={index}
            onClick={() => {
              removeElement(index);
            }}
          >
            {tech}
          </h1>
        );
      })}
    </div>
  );
};

export default KeyBug;
