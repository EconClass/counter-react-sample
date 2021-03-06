import React, { Component } from "react";
// import Title from "./Title";
import "./Counter.css";

// Define a new Component with a class
// It must extend Component (which we imported above)
class Counter extends Component {
  // constructor(props) {
  //   super(props); // You must call super() in the constructor!

  //   // State is an object with properties
  //   // In this case there is one property: count
  //   // this.state = {
  //   //   modifier: props.modifier,
  //   // };
  // }

  render() {
    return (
      <div className="Counter">
        <button
          onClick={() => {
            this.props.onClick()
          }}
          className="Counter--button"
        >
          Count by {this.props.modifier}
        </button>
      </div>
    );
  }
}

export default Counter;
