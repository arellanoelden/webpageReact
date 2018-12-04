import React, {Component} from 'react';

class experience extends Component {
  render() {
    return(
      <section className="experience">
        <h2>Experience: </h2>
        <div className="experienceItems">
          <div className="experienceItem">
            <h3>Associate Front End Eng.</h3>
            <p> Since July 2018 I have worked at American Specialty Health as a front end engineer where I work with html, css, ember and vanilla JS. Additionally I help contribute to new code standards, discuss viable options for site improvements, and work on the continous integration builds and releases.</p>
          </div>
          <div className="experienceItem">
            <h3>Tutor</h3>
            <p> Worked as a tutor for 3 quarters where I helped students in their assignments and answered any questions they would ask. The most benefical was tutoring for UCSD's Web Client Languages course as it greatly helped me further understand web development fundamentals as well as give me more experience in working with others. </p>
          </div>
          <div className="experienceItem">
            <h3>Webmaster</h3>
            <p> For 1.5 years I worked as the webmaster for the Leichtag Foundation on campus where I update the site continually as things need to get posted. For the second half of 2017 I worked at CAIDA located at the Super Computer Center within UCSD. Here I also updated the site but also added functionality to many of the pages using Vanilla JS,Jquery, Python, and Bash. </p>
          </div>
        </div>
      </section>
    );
  }
}

export default experience;