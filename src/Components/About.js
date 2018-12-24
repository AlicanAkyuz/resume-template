import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
         <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="Alican Profile Pic" />
         </div>
         <div className="nine columns main-col">
          <h2>About Me</h2>
          <hr />
          <p>
            I work primarily on front-end web development with React.js and Material Design, and enjoy solving UX
            problems through user-friendly and responsive layouts. I also take pleasure in developing back-end web
            architectures with Express.js and mobile apps with React Native.
            <br /><br />
            Through my formal education, I acquired a strong eye for design patterns.
            I completed an internship as a social media coordinator at the OU in the UK. Last year, I joined first
            Codecademy and then Udacity to develop my web development and programming skills.
            <br /><br />
            I am the creator of <a target="_blank" href="https://electrony.space">Electrony</a>, which is an
            interactive platform for electronic music lovers. Electrony is built with React.js and its RESTful
            API works with Spotify. I am currently developing Electrony’s mobile app and a news website that aims
            at putting on a happy expression on its users’ faces through optimistic and heart warming news.
            <br /><br />
            Last but not least, I preserve my entrepreneurial spirit and am interested in revolutionary ideas
            and technologies. Whether you have a project for me to develop, or want to start a venture from the
            scratch together, please do not hesitate to contact me through the form below.
          </p>
         </div>
        </div>
      </section>
    );
  }
}

export default About;
