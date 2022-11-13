import React from "react";

const FRInput = React.createRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
