import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
         <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="Profile Pic" />
         </div>
         <div className="nine columns main-col">
          <h2>About Me</h2>
          <hr />
          <p>
            I am a developer specializing in......
          </p>
         </div>
        </div>
      </section>
    );
  }
}

export default About;
