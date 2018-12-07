import React, {Component} from 'react';

class experience extends Component {
  render() {
    return(
      <section className="experience container">
        <h2>Experience: </h2>
        <div className="experienceItems">
          <div className="experienceItem">
            <h3>Associate Front End Eng.</h3>
            <p> Since July 2018 I have worked at American Specialty Health as a front end engineer where I work with Html, Css, Ember JS and vanilla JS. Additionally I help contribute to new code standards, discuss viable options for site improvements, and work on the continous integration builds and releases.</p>
          </div>
          <div className="experienceItem">
            <h3>Tutor</h3>
            <p> Worked as a tutor for 3 quarters where I helped students in their assignments and answered their questions. The most benefical was tutoring for UCSD's Web Client Languages course as it greatly helped me further understand web development fundamentals as well as give me more experience in working with others. </p>
          </div>
          <div className="experienceItem">
            <h3>Webmaster</h3>
            <p> Worked 1.5 years as the webmaster for the Leichtag Foundation on campus where I updated the site continually. For the second half of 2017 I worked at CAIDA where I also updated the site and added functionality to many of the pages using vanilla JS, Jquery, Python, and Bash. </p>
          </div>
        </div>
      </section>
    );
  }
}

export default experience;