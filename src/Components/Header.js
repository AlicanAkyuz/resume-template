import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
  	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about" rel="noopener noreferrer">About</a></li>
            <li><a className="smoothscroll" href="#portfolio" rel="noopener noreferrer">Portfolio</a></li>
            <li><a className="smoothscroll" href="#resume" rel="noopener noreferrer">Resume</a></li>
            <li><a className="smoothscroll" href="#contact" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">YOUR NAME HERE</h1>
            <h3>I'm a web developer based in ...</h3>
            <hr />
            <ul className="social">
               <li key="facebook">
                 <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                   <i className="fa fa-facebook"></i>
                 </a>
               </li>
               <li key="linkedin">
                 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
                   <i className="fa fa-linkedin"></i>
                 </a>
               </li>
               <li key="github">
                 <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
                   <i className="fa fa-github"></i>
                 </a>
               </li>
            </ul>
         </div>
       </div>
       <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       </p>
   </header>
    );
  }
}

export default Header;
