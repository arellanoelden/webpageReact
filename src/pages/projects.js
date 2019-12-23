import React, { Component } from "react";
import "../styles/projects.css";

class homePage extends Component {
  render() {
    return (
      <section className="projects">
        <h1>Projects:</h1>
        <article className="project">
          <h2>Pokedex</h2>
          <p>
            Created a copy pokedex that lazy loads the compoennts when they come
            in view and has full search functionality with autocomplete
            functionality. This web app also shows a full evolutionc chain with
            type advantages and with this much data being loaded it also has
            skeleton loading. The components used are from the{" "}
            <a
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material-UI React Component Library
            </a>{" "}
            and takes advantage of the built in themeing along with having
            support for a darkmode. with type advantages. This is a full pwa and
            in the future I plan on adding accounts to be able to keep track of
            a team if a user wants to create one.
          </p>
          <span className="linksContainer">
            <a
              href="https://pokedex-11caf.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/arellanoelden/pokedex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>TeamWatch</h2>
          <p>
            Created a soccer team base application that would allow users to
            create a team, add players, edit players, and give access to the
            team via a team id. Additionally this webapp has live stats for
            keeping track of individual game stats such as goals, fouls, free
            kicks etc. Additionally players can add a photo or keep track of
            their indivual stats over the season. Any users who log in as part
            of a team will get a page for their schedule filled with upcoming
            and past games. This webapp is additionally a PWA so users can
            install the app and the app has offline support.
          </p>
          <span className="linksContainer">
            <a
              href="https://cse134bfinal.firebaseapp.com/login.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/arellanoelden/teamwatchfinal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>Webpage</h2>
          <p>
            This very site is created using React. This site has gone through a
            ton of revisions because I usually just try and mix things up a bit
            with the look and feel. Additionally, thanks to this project it has
            kinda made me want to make some automations like having a gulp file
            that resizes all of my images, a sass gulp task to watch all of my
            styles, etc. This project can really be like a playground for me to
            try things I think are cool. I am toying with a ton of stuff to add.
            I plan on adding a tips and tricks section under "CoolCode" as well
            as implementing a blog in the near future where I can post my
            thoughts about web development. Additionally this is also a PWA and
            has a responsive design for smaller devices.
          </p>
          <span className="linksContainer">
            <a
              href="https://github.com/arellanoelden/webpageReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>UCSD mini</h2>
          <p>
            Here I took the homepage of my college, UCSD, and made it perform as
            fast as I could without changing the look of the page. Some of the
            tactics I used included request bundling, image optimization, defer
            loading images, eliminating render-blocking resources, implementing
            a service worker for caching and more. It was pretty cool to see how
            even something like a font family can take up a crazy amount of
            space and how even some small fixes can make a huge difference
            performance wise. Afterwards the page was a fully realized PWA and
            performed much better than before.
          </p>
          <span className="linksContainer">
            <a
              href="https://ucsdmini.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/arellanoelden/ucsdmini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>Planit Triton</h2>
          <p>
            In school for a group project my group and I created a site that
            would be a hub for class information. Stats such as class
            description, average grade, average grade with that professor,
            average study time, links to ratemyproffesor and capes, etc.
            Basically a hub that would help students in picking their courses
            for the following quarters. I aided in the UI as well as helped
            grabbing some of the data we used via Beautiful Soup in python to
            scrape some of the webpages with the info we needed.
          </p>
          <span className="linksContainer">
            <a
              href="https://github.com/aamirrasheed/ucsdplanner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>React Class Example</h2>
          <p>
            While I was a tutor for a web development course where the class was
            to create a basic CRUD application using React. In order to help the
            students I created a simple CRUD application that could hold a game
            list where game titles could be added, deleted, or updated.
            Additionally there was simple chat functionality along with the use
            of Redux for keeping data stored within the session.
          </p>
          <span className="linksContainer">
            <a
              href="https://github.com/arellanoelden/reactExample"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
        <article className="project">
          <h2>Create a PWA</h2>
          <p>
            This one is pretty traight forward. This projects will create an
            empty html file and take an icon as input. It will spit out an html
            file that has links to a manifest.json as well as a service worker
            file and will register that service worker. This project at start
            will meet all the standards for a PWA and create the correct icon
            sizes needed.
          </p>
          <span className="linksContainer">
            <a
              href="https://github.com/arellanoelden/create_pwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="github logo link to project that is described"
                src={require("../images/github-logo48.png")}
              />
            </a>
          </span>
        </article>
      </section>
    );
  }
}

export default homePage;
