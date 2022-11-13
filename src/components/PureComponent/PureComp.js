import React, { PureComponent } from "react";

//what is the difference between the Component and PureComponent

//Regular Component
// A regular component does not implement the shouldComponentUpdate PaymentMethodChangeEvent. It always returns true by default

//Pure Component
//A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison.

//Shallow Comparison
//Primitive Types
// a(SC) b returns true if a and b have the same value and are of the same type.

//Complex Types
//a(SC) b returns true if a and b reference the exact same object
//Ex var a = [1,2,3]
// var b = [1,2,3]
// var c = a;

// var ab_eq=(a===b) false
// var ac_eq=(a===c) true

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
