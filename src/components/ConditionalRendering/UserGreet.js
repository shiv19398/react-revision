import React, { Component } from "react";

class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // first approach:- by using if/else statement
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Shiv</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //second approach:- element variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Shiv</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //third approach:- by using ternary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Shiv</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Short circuit is just a form of ternary operator
    //we use this when we want to render something or nothing
    //What will happen here is first left hand side is evaluated and if it is true then only the right hand side will be evaluated
    return this.state.isLoggedIn && <div>Welcome Shiv</div>;
  }
}

export default UserGreet;
