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
              I talk about the beginnings of python and a lot of the
              syntax/methods available in it while making a simple Github star
              checker.
            </p>
            <Link to="/notes/1">Python Notes</Link>
          </article>
          <article className="card notes-card">
            <p>
              I actually feel I know React quite well but at the same time I
              think taking a course on it helps me learn some of the newer stuff
              and get my feet wet with it, so I took a React course as a good
              supplement. From this course in particular I learned more about
              hooks, effects, context, error boundaries, and portals. I also got
              a good review in general of everything react can do. In
              particular, context seemed like a good substitue for redux in
              certain situations.
            </p>
            <Link to="/notes/2">React Notes</Link>
          </article>
          <article className="card notes-card">
            <p>
              As is a common theme knowing something and using something are not
              the same. My bread and butter and a front end engineer has been
              using Javascript and so I make sure I know even the "hard parts"
              of Javascript. This course was called just that, "Javascript: The
              hard parts" where such topics such as the call stack, classes,
              prototypal inheritence, closures, promises/async Javascript and
              more. I actually also went through version 1 of the course but
              didn't take markdown notes that time so here they are for version
              2!.
            </p>
            <Link to="/notes/3">Javascript Notes</Link>
          </article>
        </div>
      </section>
    );
  }
}

export default notes;
