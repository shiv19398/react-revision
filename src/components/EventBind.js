import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //approach 3:- binding in the constructor(by far the best one)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "GoodBye",
    });
    console.log(this);
  }

  //approach 4:- defining your event handler as arrow funtion
  //   clickHandler = () => {
  //     this.setState({
  //       message: "GoodBye!",
  //     });
  //   };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* Approach 1:- Binding in the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 2:- Binding with arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click </button> */}
        <button onClick={this.clickHandler}>Click </button>
      </div>
    );
  }
}

export default EventBind;
