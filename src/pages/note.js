import React, { Component } from "react";
import Markdown from "react-markdown";
import python from "../notes/python.md";
import react from "../notes/react.md";
import "../styles/markdown.css";

class note extends Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    this.state = { id, text: null };
  }
  componentWillMount() {
    const map = {
      1: python,
      2: react
    };
    const { id } = this.state;
    const mdFile = map[id];
    fetch(mdFile)
      .then(response => response.text())
      .then(text => {
        this.setState({ text });
      });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="markdown-body">
        <Markdown source={text} escapeHtml={false} />
      </div>
    );
  }
}

export default note;
