import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
         <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <hr />

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <div key="Electrony Website" className="columns-portfolio-item">
              <div className="item-wrap">
                <a target="_blank" href="https://electrony.space" title="Electrony Website">
                  <img alt="Electrony Website" src="images/portfolio/electrony.png" />
                </a>
              </div>

              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project Address:
                  <a target="_blank" href="https://electrony.space" title="Electrony Website">
                    <em className="project"> www.electrony.space</em>
                  </a>
                </p>
                <p className="titles"><span>&bull;</span> About:
                  <em className="project"> An electronic music playlist creator based on a number of musical parameters such as BPM and dB</em>
                </p>
                <p className="titles"><span>&bull;</span> My Role:
                  <em className="project"> Founder and Full-Stack Developer</em>
                </p>
                <p className="titles"><span>&bull;</span> Technologies Used:
                  <em className="project"> Material UI, Grid, Animate.css, React.js, React-Redux, React-Router-Dom, Express.js, Spotify Web API, AWS</em>
                </p>
              </div>
            </div>

            <hr />

            <div key="Portfolio Template" className="columns-portfolio-item">
              <div className="item-wrap">
                <a target="_blank" href="https://github.com/AlicanAkyuz/Portfolio-Template" title="Portfolio Template">
                  <img alt="Portfolio Template" src="images/portfolio/electrony.png" />
                </a>
              </div>

              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project Address:
                  <a target="_blank" href="https://github.com/AlicanAkyuz/Portfolio-Template" title="GitHub Template">
                    <em className="project"> Template on GitHub</em>
                  </a>
                </p>
                <p className="titles"><span>&bull;</span> About:<em className="project"> A portfolio template shared open-sorce with the community.</em></p>
                <p className="titles"><span>&bull;</span> My Role:<em className="project"> Creator and Developer</em></p>
                <p className="titles"><span>&bull;</span> Technologies Used:
                  <em className="project"> Material UI, Flexbox, React.js, React-Redux, Lodash, Mailgun.js</em>
                </p>
              </div>
            </div>
            <hr />
          </div>
         </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
