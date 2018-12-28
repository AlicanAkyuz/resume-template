import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <section id="contact">
         <div className="row section-head">
          <div className="two columns header-col">
            <h1><span></span></h1>
          </div>
          <div className="ten columns">
            <p className="title">Contact</p>
            <hr />
            <p className="lead">
              Don't be shy to reach out. I look forward to hearing from you.
            </p>
          </div>
         </div>
         <div className="row">
          <div className="eight columns">
            <div>
              <form method="POST" action="https://formspree.io/alicakyz@gmail.com">
  					   <label htmlFor="contactName">Name <span className="required">*</span></label>
  					   <input type="text"
                      size="35"
                      required
                      id="contactName"
                      name="name" />
               <label htmlFor="contactEmail">Email <span className="required">*</span></label>
 					     <input type="text"
                      size="35"
                      required
                      id="contactEmail"
                      name="email" />
               <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
               <input type="text"
                      size="35"
                      required
                      id="contactSubject"
                      name="subject" />
               <label htmlFor="contactMessage">Message <span className="required">*</span></label>
               <textarea cols="10"
                         rows="5"
                         required
                         id="contactMessage"
                         name="message">
               </textarea>
               <button type="submit" className="submit">Submit</button>
              </form>
            </div>
         </div>
      </div>
    </section>
    );
  }
}

export default Contact;
