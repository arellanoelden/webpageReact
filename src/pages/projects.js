import React, { Component } from 'react';
import '../styles/projects.css';

class homePage extends Component {
  render() {
    return (
      <section className="projects">
        <h1>Projects:</h1>
        <article className="project">
            <h2>TeamWatch</h2>
            <a href="https://github.com/arellanoelden/teamwatchfinal"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>Created a soccer team base application that would allow users to create a team, add players, edit players, and give access to the team via a team id. Additionally this webapp has live stats for keeping track of individual game stats such as goals, fouls, free kicks etc. Additionally players can add a photo or keep track of their indivual stats over the season. Any users who log in as part of a team will get a page for their schedule filled with upcoming and past games. This webapp is additionally a PWA so users can install the app and the app has offline support.</p>
        </article>
        <article className="project">
            <h2>UCSD mini</h2>
            <a href="https://github.com/arellanoelden/ucsdmini"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>Here I took the homepage of my college, UCSD, and made it perform as fast as I could without changing the look of the page. Some of the tactics I used included request bundling, image optimization, defer loading images, eliminating render-blocking resources, implementing a service worker for caching and more. Afterwards the page was a fully realized PWA and performed much better than before.</p>
        </article>
        <article className="project">
            <h2>Webpage</h2>
            <a href="https://github.com/arellanoelden/webpageReact"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>This very site is created using React. I am toying with a ton of stuff to add. I plan on adding a tips and tricks section under "CoolCode" as well as implementing a blog in the near future where I can post my thoughts about web development. Additionally this is also a PWA and has a responsive design for smaller devices.</p>
        </article>
        <article className="project">
            <h2>Planit Triton</h2>
            <a href="https://github.com/aamirrasheed/ucsdplanner"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>In school for a group project my group and I created a site that would be a hub for class information. Stats such as class description, average grade, average grade with that professor, average study time, links to ratemyproffesor and capes, etc. Basically a hub that would help students in picking their courses for the following quarters. I aided in the UI as well as helped grabbing some of the data we used via Beautiful Soup in python to scrape some of the webpages with the info we needed.</p>
        </article>
        <article className="project">
            <h2>React Class Example</h2>
            <a href="https://github.com/arellanoelden/reactExample"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>While I was a tutor for a web development course where the class was to create a basic CRUD application using React. In order to help the students I created a simple CRUD application that could hold a game list where game titles could be added, deleted, or updated. Additionally there was simple chat functionality along with the use of Redux for keeping data stored within the session.</p>
        </article>
        <article className="project">
            <h2>Create a PWA</h2>
            <a href="https://github.com/arellanoelden/create_pwa"><img alt="github logo link to project that is described" src={require("../images/github-logo48.png")} /></a>
            <p>This one is pretty traight forward. This projects will create an empty html file and take an icon as input. It will spit out an html file that has links to a manifest.json as well as a service worker file and will register that service worker. This project at start will meet all the standards for a PWA and create the correct icon sizes needed.</p>
        </article>
      </section>
    );
  }
}

export default homePage;
