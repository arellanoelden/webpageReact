import React, { Component } from "react";

class TrackVisibility extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  async componentDidMount() {
    if (!("IntersectionObserver" in window)) {
      this.props.onVisible();
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio > 0.1) {
            this.props.onVisible();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1.0
        }
      );
      if (this.ref.current) {
        observer.observe(this.ref.current);
      }
    }
  }

  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}

export default TrackVisibility;
