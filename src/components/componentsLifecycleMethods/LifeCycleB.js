import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shiv",
    };
    console.log("constructor B");
  }

  //gets parameter as props and state and has to return new state or null
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps B");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount B");
  }
  shouldComponentUpdate() {
    console.log("should ComponentUpdate B");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate B");
    return null;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate B");
  }
  render() {
    console.log("render B");
    return <div>Render method B</div>;
  }
}

export default LifeCycleB;
