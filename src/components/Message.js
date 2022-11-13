import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeText() {
    this.setState({ message: "Thanks for Subscribing" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeText()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
