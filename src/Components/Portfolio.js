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

            <div key="Soundiversify Website" className="columns-portfolio-item">
              <div className="item-wrap">
                <a href="https://www.soundiversify.com" title="Soundiversify Website">
                  <img alt="Soundiversify Website" src="images/portfolio/soundiversify.jpg" />
                </a>
              </div>
              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project:<em className="project"> Electronify.com</em></p>
                <p className="titles"><span>&bull;</span> Role:<em className="project"> Creator and Full-Stack Developer</em></p>
                <p className="titles"><span>&bull;</span> About:<em className="project"> An authentic playlist generator</em></p>
                <p className="titles"><span>&bull;</span> Technologies:
                  <em className="project"> Material UI, Flexbox, React.js, Redux, Express.js</em>
                </p>
              </div>
            </div>
            <hr />

            <div key="Soundiversify Mobile App" className="columns-portfolio-item">
              <div className="item-wrap">
                <a href="https://www.soundiversify.com" title="Soundiversify Mobile App">
                  <img alt="Soundiversify Mobile App" src="images/portfolio/soundiversify.jpg" />
                </a>
              </div>
              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project:<em className="project"> Soundiversify IOS App</em></p>
                <p className="titles"><span>&bull;</span> Role:<em className="project"> Creator and Developer</em></p>
                <p className="titles"><span>&bull;</span> About:<em className="project"> Soundiversify for IOS</em></p>
                <p className="titles"><span>&bull;</span> Technologies:
                  <em className="project"> React-Native, Expo</em>
                </p>
              </div>
            </div>
            <hr />

            <div key="Museum Locale" className="columns-portfolio-item">
              <div className="item-wrap">
                <a href="https://www.museumlocale.com" title="Museum Locale">
                  <img alt="Museum Locale" src="images/portfolio/museum.jpg" />
                </a>
              </div>
              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project:<em className="project"> Museum Locale</em></p>
                <p className="titles"><span>&bull;</span> Role:<em className="project"> Full-Stack Developer</em></p>
                <p className="titles"><span>&bull;</span> About:<em className="project"> An online art curator</em></p>
                <p className="titles"><span>&bull;</span> Technologies:
                  <em className="project"> Material UI, Flexbox, React.js, Redux, Express.js</em>
                </p>
              </div>
            </div>
            <hr />

            <div key="Portfolio Template" className="columns-portfolio-item">
              <div className="item-wrap">
                <a href="https://www.museumlocale.com" title="Portfolio Template">
                  <img alt="Portfolio Template" src="images/portfolio/portfolio.jpg" />
                </a>
              </div>
              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project:<em className="project"> Portfolio template</em></p>
                <p className="titles"><span>&bull;</span> Role:<em className="project"> Creator and Developer</em></p>
                <p className="titles"><span>&bull;</span> About:<em className="project"> A portfolio template shared open-sorce with the community.</em></p>
                <p className="titles"><span>&bull;</span> Technologies:
                  <em className="project"> Material UI, Flexbox, React.js, Redux, Express.js</em>
                </p>
              </div>
            </div>

          </div>
         </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
