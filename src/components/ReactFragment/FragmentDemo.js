import React from "react";

const FragmentDemo = () => {
  return (
    //As we have to wrap up all the element into a single node in jsx to render , this div tag will be an extra node in the DOM.
    //So to get rid of this, we can make use of React.Fragment which wraps up all our jsx code into a single node without putting extra node in our DOM tree.
    // <div>
    //   <h1>Fragment Demo</h1>
    //   <p>This describe the Fragment Demo element.</p>;
    // </div>

    //replace the div with the React.Fragment
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo element.</p>
    </React.Fragment>
  );
};

export default FragmentDemo;
