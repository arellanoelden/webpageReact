import React, {Component} from 'react';

class languages extends Component {
  render() {
    return(
      <section className="tech">
        <h2>Languages</h2>
        <article>
          <h3>Proficient:</h3>
          <ul>
            <li>Vanilla JS</li>
            <li>Ember</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </article>
        <hr/>
        <article>
          <h3>Experience With:</h3>
          <ul>
            <li>Angular</li>
            <li>XML</li>
            <li>Bash</li>
            <li>C/C++</li>
          </ul>
        </article>
      </section>
    );
  }
}

export default languages;