import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback Value", this.state.count);
      }
    );
  }

  //   React may group multiple setState calls into one setState calls to optimize the performance
  //this piece of code will perform setState() call only once.
  //if you really want this to perform as it is, then we have to use prevState as we have used.
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
