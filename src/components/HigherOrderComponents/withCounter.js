import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    //this incrementcount is going to be required in ClickCounter component and HoverCounter Component so instead of duplicating the code into both the components we have defined it in our higher order component which is UpdatedComponent and we can use this functionality wherever we want by just using this HOC
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          //   we will pass the state and eventHandler as props to our component so that they can access it
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
