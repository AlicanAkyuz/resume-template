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
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm Alican Akyuz</h1>
            <h3>I'm a freelance web developer currently based in Oregon, USA.</h3>
            <hr />
            <ul className="social">
               <li key="facebook">
                 <a target="_blank" href="https://www.facebook.com/alican.akyuz.13">
                   <i className="fa fa-facebook"></i>
                 </a>
               </li>
               <li key="linkedin">
                 <a target="_blank" href="https://www.linkedin.com/in/alican-akyuz-80b67416b/">
                   <i className="fa fa-linkedin"></i>
                 </a>
               </li>
               <li key="github">
                 <a target="_blank" href="https://github.com/AlicanAkyuz">
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
