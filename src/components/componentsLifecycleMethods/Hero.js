import React from "react";

const Hero = ({ heroName }) => {
  //if the heroName is joker, then throw the error
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroName}</div>;
};

export default Hero;
