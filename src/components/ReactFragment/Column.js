import React from "react";

const Column = () => {
  return (
    //this code will give a warning,i.e, <td> cannot appear as a child of div as it can be child of tr only.
    // <div>
    //   <td>Name</td>
    //   <td>Shiv</td>
    // </div>

    //key attribute is the only attribute that can be passed to React.Fragment
    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Shiv</td>
    // </React.Fragment>

    //there is also a short hand syntax for React.Fragment which is
    <>
      <td>Name</td>
      <td>Shiv</td>
    </>

    //as you can see it works perfectly without any warning but there is a shortcoming to this short hand syntax which is you cannot pass key attribute to this empty tags. to pass key attribute, we have to use React.Fragment
  );
};

export default Column;
