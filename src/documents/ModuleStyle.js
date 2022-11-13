import React from "react";
import "../styles/appStyles.css";
//importing a css module file is different like this:-
import styles from "../styles/appStyles.module.css";

//in normal styling approach, there is a styling conflict that occurs very often which is if you define a stylesheet where you have used some classNames for a component and for styling other component you have used same className by mistake then styles will be applied automatically of the previous stylesheet.
//This can be removed by using css modules because they give errors
const ModuleStyle = () => {
  return (
    <div>
      {/* normal styling approach */}
      <h1 className="error">Error</h1>

      {/* using module stylesheet */}
      <h1 className={styles.success}>Success</h1>
    </div>
  );
};

export default ModuleStyle;
