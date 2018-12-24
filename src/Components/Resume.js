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
            <div key="Soundiversify.io">
              <h3>Electrony.space</h3>
              <p className="info">Founder and Full-Stack Developer
                <span>&bull;</span>
                <em className="date">August 2018 - Present</em>
              </p>
            </div>
            <div key="Onedio.com">
              <h3>Onedio.com</h3>
              <p className="info">Creative Content Editor
                <span>&bull;</span>
                <em className="date">June 2012 - August 2015</em>
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
              <div key="Udemy">
                <h3>Udemy</h3>
                <p className="info">Full-Stack Web Development Certificate
                  <span>&bull;</span>
                  <em className="date">August, 2018</em>
                </p>
              </div>
              <div key="Codacademy">
                <h3>Codacademy</h3>
                <p className="info">Web Development Path
                  <span>&bull;</span>
                  <em className="date">January, 2018</em>
                </p>
              </div>
              <div key="Humboldt-University of Berlin, Germany">
                <h3>Humboldt-University of Berlin, Germany</h3>
                <p className="info">M.A. in Cultural Studies
                  <span>&bull;</span>
                  <em className="date">July, 2017</em>
                </p>
              </div>
              <div key="Hacettepe University, Turkey">
                <h3>Hacettepe University, Turkey</h3>
                <p className="info">B.A. in English
                  <span>&bull;</span>
                  <em className="date">June, 2015</em>
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
            <li key="Figma (80%)">
              <span style={{width: "80%"}} className="bar-expand figma (80%)"></span>
              <em>Figma/Sketch (80%)</em>
            </li>
            <li key="HTML5 & CSS3 (95%)">
              <span style={{width: "95%"}} className="bar-expand html5 & css3 (95%)"></span>
              <em>HTML5 & CSS3 (95%)</em>
            </li>
            <li key="Responsive Design Grid & FlexBox (90%)">
              <span style={{width: "90%"}} className="bar-expand responsive design grid & flexBox (90%)"></span>
              <em>Grid & FlexBox (90%)</em>
            </li>
            <li key="JavaScript ES6 (90%)">
              <span style={{width: "90%"}} className="bar-expand javascript es6 (85%)"></span>
              <em>JavaScript ES6 (90%)</em>
            </li>
            <li key="React.JS (90%)">
              <span style={{width: "90%"}} className="bar-expand react.js (90%)"></span>
              <em>React.JS (90%)</em>
            </li>
            <li key="React Material-UI (95%)">
              <span style={{width: "95%"}} className="bar-expand react material-ui (95%)"></span>
              <em>React Material-UI (95%)</em>
            </li>
            <li key="React-Redux (80%)">
              <span style={{width: "80%"}} className="bar-expand react-redux (80%)"></span>
              <em>React-Redux (80%)</em>
            </li>
            <li key="React Native (70%)">
              <span style={{width: "70%"}} className="bar-expand react native (70%)"></span>
              <em>React Native (70%)</em>
            </li>
            <li key="Node with Express.JS (75%)">
              <span style={{width: "75%"}} className="bar-expand node with express.js (75%)"></span>
              <em>Node with Express.JS (75%)</em>
            </li>
            <li key="TDD with Mocha (50%)">
              <span style={{width: "50%"}} className="bar-expand tdd with mocha (50%)"></span>
              <em>TDD with Mocha (50%)</em>
            </li>
            <li key="Git (90%)">
              <span style={{width: "90%"}} className="bar-expand git (90%)"></span>
              <em>Git (90%)</em>
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
