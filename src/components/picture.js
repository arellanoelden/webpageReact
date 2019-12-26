import React, { Component } from "react";

class picture extends Component {
  constructor(props) {
    super(props);

    this.constructQuery = this.constructQuery.bind(this);
    this.webpQuery = this.constructQuery(this.props.image, ".webp");
    this.jpgQuery = this.constructQuery(this.props.image, ".jpg");
  }

  constructQuery(imageName, format) {
    const sizes = ["2000w", "1600w", "1200w", "800w", "600w"];
    let imageQuery = "";
    sizes.forEach(size => {
      let image = require("../images/" + imageName + "_" + size + format);
      imageQuery += image + ` ${size},`;
    });
    return imageQuery;
  }

  render() {
    return (
      <picture className={this.props.classes}>
        <source
          srcSet={this.webpQuery}
          type="image/webp"
          sizes={this.props.sizes}
        />
        <source
          srcSet={this.jpgQuery}
          type="image/jpg"
          sizes={this.props.sizes}
        />
        <img
          src={require("../images/" + this.props.image + "_800w.jpg")}
          alt={this.props.alt}
        />
      </picture>
    );
  }
}

export default picture;
