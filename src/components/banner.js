import React, {Component} from 'react';

class banner extends Component {
  render() {
    return(
      <section className="banner">
        <span className="bannerInfo">
          <h1>Elden Arellano</h1>
          <p className="email">arellanoelden11@yahoo.com</p>
          <p className="occupation">Front End Engineer</p>
        </span>
      </section>
    );
  }
}

export default banner;