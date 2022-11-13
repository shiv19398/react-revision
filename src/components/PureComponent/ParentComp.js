import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComponent from "../memo/MemoComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shiv",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Shiv",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Comp");
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    );
  }
}

export default ParentComp;
