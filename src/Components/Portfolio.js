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

            <div key="YOUR WORK'S NAME" className="columns-portfolio-item">
              <div className="item-wrap">
                <a target="_blank" href="YOUR WORK'S URI" rel="noopener noreferrer" title="Website">
                  <img alt="Website" src="images/portfolio/.png" />
                </a>
              </div>

              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project Address:
                  <a target="_blank" href="PROJECT'S LINK" rel="noopener noreferrer" title="Website">
                    <em className="project"> PROJECT'S NAME</em>
                  </a>
                </p>
                <p className="titles"><span>&bull;</span> About:
                  <em className="project"> EXPLAIN WHAT IT DOES</em>
                </p>
                <p className="titles"><span>&bull;</span> My Role:
                  <em className="project"> YOUR ROLE</em>
                </p>
                <p className="titles"><span>&bull;</span> Technologies Used:
                  <em className="project"> WHICH TECHNOLOGIES USED</em>
                </p>
              </div>
            </div>

            <hr />

            <div key="YOUR WORK'S NAME" className="columns-portfolio-item">
              <div className="item-wrap">
                <a target="_blank" href="YOUR WORK'S URI" rel="noopener noreferrer" title="Website">
                  <img alt="Website" src="images/portfolio/.png" />
                </a>
              </div>

              <div className="explanation">
                <p className="titles"><span>&bull;</span> Project Address:
                  <a target="_blank" href="PROJECT'S LINK" rel="noopener noreferrer" title="Website">
                    <em className="project"> PROJECT'S NAME</em>
                  </a>
                </p>
                <p className="titles"><span>&bull;</span> About:
                  <em className="project"> EXPLAIN WHAT IT DOES</em>
                </p>
                <p className="titles"><span>&bull;</span> My Role:
                  <em className="project"> YOUR ROLE</em>
                </p>
                <p className="titles"><span>&bull;</span> Technologies Used:
                  <em className="project"> WHICH TECHNOLOGIES USED</em>
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
