import React, { Component } from "react";
import "../styles/homepage.css";
import Picture from "../components/picture";

class homePage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <button id="installBtn">Install</button> */}
        <section className="banner">
          <span className="bannerInfo card">
            <h1>Elden Arellano</h1>
            <p className="email">arellanoelden11@yahoo.com</p>
            <p className="occupation">Front End Engineer</p>
          </span>
        </section>
        <section className="tech experience container">
          <h2>Languages/Experience:</h2>
          <div className="languageContainer">
            <article className="card">
              <h3>Proficient:</h3>
              <ul>
                <li>Vanilla JS</li>
                <li>Ember</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </article>
            <article className="card">
              <h3>Experience With:</h3>
              <ul>
                <li>Angular</li>
                <li>XML</li>
                <li>Bash</li>
                <li>C/C++</li>
              </ul>
            </article>
          </div>
          <div className="experienceItems">
            <div className="experienceItem card">
              <h3>Front End Eng.</h3>
              <p>
                Since July 2018 I have worked at American Specialty Health as a
                front end engineer where I work with Html, Css, Ember JS and
                vanilla JS. Additionally I help contribute to new code
                standards, discuss viable options for site improvements, and
                work on the continous integration builds and releases. I have
                been in charge of a large reusable component that handles the
                registration,login,forgot password, etc. that is used across
                multiple products. Additionally, I have helped the company
                choose and adopt a design system for all of our products to
                eventually switch to while also coming up with a migration plan.
              </p>
            </div>
            <div className="experienceItem card">
              <h3>Tutor</h3>
              <p>
                Worked as a tutor for 3 quarters where I helped students in
                their assignments and answered their questions. The most
                benefical was tutoring for UCSD's Web Client Languages course as
                it greatly helped me further understand web development
                fundamentals as well as give me more experience in working with
                others. The students worked in both vanilla JS and in the second
                half of the quarter needed to create a CRUD app using ReactJS. I
                had to make sure I knew React just on the surface level but to
                an extent that I could teach others and help them debug their
                projects.
              </p>
            </div>
            <div className="experienceItem card">
              <h3>Webmaster</h3>
              <p>
                Worked 1.5 years as the webmaster for the Leichtag Foundation on
                campus where I updated the site continually. For the second half
                of 2017 I worked at CAIDA where I also updated the site and
                added functionality to many of the pages using vanilla JS,
                Jquery, Python, and Bash. Here I learned much more Jquery usage
                which then led me to learn what can be used from vanilla JS in
                order to replace Jquery. Additionally, there was much templating
                invloved here that helped me deepen my knowledge of both html
                and css that forced me to try and understand them in a
                professional setting rather than just trying to get something
                that works on the page.
              </p>
            </div>
          </div>
        </section>
        <section className="slide athletic">
          <Picture
            image="barca"
            classes="lazyPic"
            alt="logo of my favorite soccer team, barcalona"
            sizes="20vw, (max-width: 800px) 80vw"
          />
          <span className="card">
            <h3>Athletics</h3>
            <p>
              From about age 4 to age 19 I played soccer constantly. Sometimes
              even being on 2 teams at once. Practice every single day, games on
              weekeneds etc. This consistency I feel really helped me become
              disciplined and some of my best memories are from that time just
              playing and being with friends. Nowadays I dont get to play every
              day and I certainly am not as good as I used to be but I still
              enjoy going out to play and having a good time whenever I can.
              Besides soccer, I generally enjoy doing any athlete activities
              such as hiking, running, boxing, canoeing, weight lifting, etc.
            </p>
          </span>
        </section>
        <section className="slide entertainment">
          <Picture
            image="got"
            classes="lazyPic"
            alt="image of one of my favorite tv shows, game of thrones"
            sizes="20vw, (max-width: 800px) 80vw"
          />
          <span className="card">
            <h3>Entertainment</h3>
            <p>
              I have always been a big fan of movies and Tv shows. Whether it be
              Game of Thrones, Daredevil, Breaking Bad etc always enjoy a good
              show. Likewise I love watching movies whether they be a marvel
              movie, book of life, creed, etc. I even have a DVD collection
              going(I know at this point DVD players are kinda oldschool because
              everything can be streamed but I like having them). I enjoy a ton
              of these to the point where I find myself really enjoying video
              essays that I will watch on youtube that will break down the
              themes or specific scenes of a movie/show. Seeing and hearing
              other people's interpretation of cinema is exciting and will often
              help me view a piece of cinema in a new light. Speaking of
              youtube, I enjoy watching several different youtube channels that
              might just be about tv, video games, technology, or even just
              random conversations that might be on a podcast or with their
              group of friends.
            </p>
          </span>
        </section>
        <section className="slide computers">
          <Picture
            image="tech"
            classes="lazyPic"
            alt='image of some technology with a title of "WEB DEVELOPMENT"'
            sizes="20vw, (max-width: 800px) 80vw"
          />
          <span className="card">
            <h3>Technology</h3>
            <p>
              As you can imagine with my field of work I am a big fan of
              techology in general. Even when I was younger I was excited for
              the newest smartphone specs. Knowing which processor each phone
              had, what resolution the screen was, the software experience, etc
              was exciting to me and something that I enjoyed staying informed
              in. I have built my own computer and spent a long time reading
              reviews on parts to make sure I made informed decisions. This
              interest has really grown into most aspects of consumer technology
              such as speakers, headphones, tv's etc. and it has been cool
              seeing all of these technologies evolve over the years. Due to my
              interest in technology, I decided to get my bachelors in computer
              engineering. Specifically I am interested in web development and
              so far have been enjoying it immensly so far.
            </p>
          </span>
        </section>
      </React.Fragment>
    );
  }
}

export default homePage;
