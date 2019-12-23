import React, { Component } from "react";
import "../styles/coolcode.css";

class homePage extends Component {
  render() {
    return (
      <div className="tips">
        <h2>JS</h2>
        <h3>Variable Declarations: let, const, var</h3>
        <pre>
          {`let example = 0;
const example2 = 0;
var example 3 = 0;
    `}
        </pre>
      </div>
    );
  }
}

export default homePage;
