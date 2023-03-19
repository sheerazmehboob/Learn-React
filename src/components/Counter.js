import React from "react";
import PropTypes from "prop-types";
import "../counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increase() {
    console.log("Hello")
    this.setState({
      count: (this.state.count += 1),
    });
  }

  Decrease() {
    if(this.state.count>0){
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  Reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <h1 className="Title">Counter App</h1>
        <div className="Container">
          <h1>{this.state.count}</h1>
          <div className="ButtonContainer">
            <button onClick={() => this.Increase()}>Increase</button>
            <button onClick={() => this.Reset()}>Reset</button>
            <button onClick={() => this.Decrease()}>Decrease</button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
