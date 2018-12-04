import React, {Component} from 'react';

class banner extends Component {
  render() {
    return(
      <section className="banner">
        <picture>
          <img alt="Elden Arellano" src={require("../images/banner.jpeg")} />
        </picture>
        <span className="bannerInfo">
          <h1>Elden Arellano</h1>
          <p>arellanoelden11@yahoo.com</p>
          <p>Assoicate Front End Engineer</p>
        </span>
      </section>
    );
  }
}

export default banner;