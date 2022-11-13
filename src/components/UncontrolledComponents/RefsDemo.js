import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    //it is good to define ref in constructor so that it is accessible through out the component
    //this is how you create a ref in class component
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    //inputRef is an object which has a property current which again is a object which has more properties.
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  //this is approach 4 of binding this to event handlers in class components
  //as we are defining our event handler as arrow function, then this is lexically bind to this class.
  handleClick = () => {
    //to access the value of a ref us, this.refName.current.value
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        {/* ref attribute is used to pass the ref that we have created for our input tag */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
