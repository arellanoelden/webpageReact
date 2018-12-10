import React, { Component } from 'react';
import '../styles/projects.css';

class homePage extends Component {
  render() {
    return (
      <section className="projects">
        <h1>Projects:</h1>
        <article className="project">
            <h2>TeamWatch</h2>
            <a href="https://github.com/arellanoelden/teamwatchfinal"><img src={require("../images/github-logo48.png")} /></a>
            <p>Created a soccer team base application that would allow users to create a team, add players, edit players, and give access to the team via a team id. Additionally this webapp has live stats for keeping track of individual game stats such as goals, fouls, free kicks etc. Additionally players can add a photo or keep track of their indivual stats over the season. Any users who log in as part of a team will get a page for their schedule filled with upcoming and past games. This webapp is additionally a PWA so users can install the app and the app has offline support.</p>
        </article>
        <article className="project">
            <h2>TeamWatch</h2>
            <a href="https://github.com/arellanoelden/teamwatchfinal"><img src={require("../images/github-logo48.png")} /></a>
            <p>Created a soccer team base application that would allow users to create a team, add players, edit players, and give access to the team via a team id. Additionally this webapp has live stats for keeping track of individual game stats such as goals, fouls, free kicks etc. Additionally players can add a photo or keep track of their indivual stats over the season. Any users who log in as part of a team will get a page for their schedule filled with upcoming and past games. This webapp is additionally a PWA so users can install the app and the app has offline support.</p>
        </article>
        <article className="project">
            <h2>TeamWatch</h2>
            <a href="https://github.com/arellanoelden/teamwatchfinal"><img src={require("../images/github-logo48.png")} /></a>
            <p>Created a soccer team base application that would allow users to create a team, add players, edit players, and give access to the team via a team id. Additionally this webapp has live stats for keeping track of individual game stats such as goals, fouls, free kicks etc. Additionally players can add a photo or keep track of their indivual stats over the season. Any users who log in as part of a team will get a page for their schedule filled with upcoming and past games. This webapp is additionally a PWA so users can install the app and the app has offline support.</p>
        </article>
        <article className="project">
            <h2>TeamWatch</h2>
            <a href="https://github.com/arellanoelden/teamwatchfinal"><img src={require("../images/github-logo48.png")} /></a>
            <p>Created a soccer team base application that would allow users to create a team, add players, edit players, and give access to the team via a team id. Additionally this webapp has live stats for keeping track of individual game stats such as goals, fouls, free kicks etc. Additionally players can add a photo or keep track of their indivual stats over the season. Any users who log in as part of a team will get a page for their schedule filled with upcoming and past games. This webapp is additionally a PWA so users can install the app and the app has offline support.</p>
        </article>
      </section>
    );
  }
}

export default homePage;
