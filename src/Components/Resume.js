import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row work">
          <p className="title">Resume</p>
          <hr />
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>

          <div className="nine columns main-col">

            <div>
              <h3>YOUR WORK'S NAME</h3>
              <p className="info">YOUR ROLE
                <span>&bull;</span>
                <em className="date">FROM YEAR - TO YEAR</em>
              </p>
            </div>

           <div>
              <h3>YOUR WORK'S NAME</h3>
              <p className="info">YOUR ROLE
                <span>&bull;</span>
                <em className="date">FROM YEAR - TO YEAR</em>
              </p>
            </div>

            <div>
              <h3>YOUR WORK'S NAME</h3>
              <p className="info">YOUR ROLE
                <span>&bull;</span>
                <em className="date">FROM YEAR - TO YEAR</em>
              </p>
            </div>
          </div>
        </div>

        <div className="row education">
         <div className="three columns header-col">
           <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div>
                <h3>SCHOOL NAME</h3>
                <p className="info">DEGREE/CERTIFICATE
                  <span>&bull;</span>
                  <em className="date">YEAR EARNED</em>
                </p>
              </div>
              <div>
                <h3>SCHOOL NAME</h3>
                <p className="info">DEGREE/CERTIFICATE
                  <span>&bull;</span>
                  <em className="date">YEAR EARNED</em>
                </p>
              </div>
              <div>
                <h3>SCHOOL NAME</h3>
                <p className="info">DEGREE/CERTIFICATE
                  <span>&bull;</span>
                  <em className="date">YEAR EARNED</em>
                </p>
              </div>
              <div>
                <h3>SCHOOL NAME</h3>
                <p className="info">DEGREE/CERTIFICATE
                  <span>&bull;</span>
                  <em className="date">YEAR EARNED</em>
                </p>
              </div>
            </div>
          </div>
         </div>
        </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
	   <div className="bars">
	    	<ul className="skills">
		    <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 1 (50%)</em>
		    </li>
		    <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 2 (5%)</em>
		    </li>
		     <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 3 (50%)</em>
		    </li>
		    <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 4 (50%)</em>
		    </li>
		    <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 5 (50%)</em>
		    </li>
		     <li>
		      <span style={{width: "50%"}} className="bar-expand(80%)"></span>
		      <em>SKILL 6 (50%)</em>
		     </li>
		</ul>
	    </div>
	 </div>
      </div>
   </section>
    );
  }
}

export default Resume;
