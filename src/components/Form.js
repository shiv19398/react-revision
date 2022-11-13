import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "React",
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }
  //an event is passed when you can something in the form
  //and the value can be accessed by event.target.value
  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleCommentsChange(event) {
    this.setState({ comments: event.target.value });
  }

  handleTopicChange(event) {
    this.setState({ topic: event.target.value });
  }

  //what should we do when one submits its data, how to handle that event so that can be done by specifying a button of type submit which indicates submission of form
  //this is a submit event so, we need to handle onSubmit event in the form
  handleSubmit = (event) => {
    //to prevent the page from refreshing which is HTML behaviour, we have to prevent it so that after hitting submit page does not get refreshed
    event.preventDefault();
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            //value will be same as state value
            value={this.state.userName}
            //whenever there is a change go to handleUserNameChange function
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>

        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        {/* if you have some fields but does not have a form around them, then you specify a button of type submit and handle the onSubmit event here */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
