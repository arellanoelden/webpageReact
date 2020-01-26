import React, { Component } from "react";
import { Link } from "react-router-dom";

class notes extends Component {
  render() {
    return (
      <section className="notes">
        <p>
          I am always trying to learn more and improve my skillset. Like many
          others taking notes helps me focus and writing it out myself helps me
          learn as well. For a long time I have been taking handwritten notes
          but I have found digital notes to be easier to come back to so here I
          will list notes from some of the courses that I have taken.
        </p>
        <div className="notes-container">
          <article className="card notes-card">
            <p>
              These are some notes for an introduction to Python course that I
              took on Frontend Masters. I have used python in the past and have
              even created some AI's to beat some games such as 2048, blackjack,
              sudoku, etc. but even though I have used the language I wanted to
              make sure that I actually knew the langiage so here are some notes
              I took about the beginnings of python and a lot of the
              syntax/methods available in it.
            </p>
            <Link to="/notes/1">Python Notes</Link>
          </article>
        </div>
      </section>
    );
  }
}

export default notes;
