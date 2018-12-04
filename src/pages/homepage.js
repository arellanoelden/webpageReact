import React, { Component } from 'react';
import Languages from '../components/languages';
import Experience from '../components/experience';
import About from '../components/about';
import Banner from '../components/banner';

class homePage extends Component {
  render() {
    return (
      <div className="homepage">
        <button id="installBtn">Install</button>
        <Banner />
        <Languages/>
        <Experience />
        <About />
      </div>
    );
  }
}

export default homePage;
