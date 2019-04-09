import React, { Component } from 'react';
import '../styles/coolcode.css';

class homePage extends Component {
  render() {
    return (
      <section className="tips">
        <h1>General Tips for Programming:</h1>
        <article>
          <h2>JS</h2>
          <h3>Variable Declarations:</h3>
          <pre>
            {`  let example = 0;
  const example2 = 0;
  var example3 = 0;`}
          </pre>
        </article>
      </section>
    );
  }
}

export default homePage;
