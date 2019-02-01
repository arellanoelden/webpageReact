import React, { Component } from 'react';

class picture extends Component {
  
  constructor(props) {
    super(props);
    this.image2000Wp = require("../images/" + this.props.image + "_2000w.webp");
    this.image1600Wp = require("../images/" + this.props.image + "_1600w.webp");
    this.image1200Wp = require("../images/" + this.props.image + "_1200w.webp");
    this.image1000Wp = require("../images/" + this.props.image + "_1000w.webp");
    this.image800Wp = require("../images/" + this.props.image + "_800w.webp");
    this.image600Wp = require("../images/" + this.props.image + "_600w.webp");
    this.queryWebp = this.image2000Wp + ' 2000w, ' + this.image1600Wp + ' 1600w, ' + this.image1200Wp + ' 1200w, ' + this.image1000Wp + ' 1000w, ' + this.image800Wp + ' 800w, ' + this.image600Wp + ' 600w';

    this.image2000J = require("../images/" + this.props.image + "_2000w.jpg");
    this.image1600J = require("../images/" + this.props.image + "_1600w.jpg");
    this.image1200J = require("../images/" + this.props.image + "_1200w.jpg");
    this.image1000J = require("../images/" + this.props.image + "_1000w.jpg");
    this.image800J = require("../images/" + this.props.image + "_800w.jpg");
    this.image600J = require("../images/" + this.props.image + "_600w.jpg");
    this.queryJpg= this.image2000J + ' 2000w, ' + this.image1600J + ' 1600w, ' + this.image1200J + ' 1200w, ' + this.image1000J + ' 1000w, ' + this.image800J + ' 800w, ' + this.image600J + ' 600w';
  }

  render() {
    return (
        <picture className={this.props.classes}>
          <source srcSet={this.queryWebp}
            type="image/webp" 
            sizes="20vw, (max-width: 800px) 80vw" />
          <source srcSet={this.queryJpg}
            type="image/webp" 
            sizes="20vw, (max-width: 800px) 80vw" />
          <img src={require('../images/' + this.props.image + "_800w.webp")} alt={this.props.alt} />
        </picture>
    );
  } 
}

export default picture;