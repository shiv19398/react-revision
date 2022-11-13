import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shiv",
    };
    console.log("constructor A");
  }

  //gets parameter as props and state and has to return new state or null
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps A");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount A");
  }

  shouldComponentUpdate() {
    console.log("should ComponentUpdate A");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate A");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate A");
  }

  changeState = () => {
    this.setState({ name: "Batman" });
  };
  render() {
    console.log("render A");
    return (
      <div>
        LifeCycle A<button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
