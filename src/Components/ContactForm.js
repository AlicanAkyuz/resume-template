import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onNameUpdated,
         onEmailUpdated,
         onSubjectUpdated,
         onMessageUpdated,
         validateForm } from '../Actions/ContactActions/Actions';

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: []
    }
  };

  handleChange (event) {
    let value = event.target.value;
    if (event.target.name === 'name') {
      this.props.dispatch(onNameUpdated(value));
    };
    if (event.target.name === 'email') {
      this.props.dispatch(onEmailUpdated(value));
    };
    if (event.target.name === 'subject') {
      this.props.dispatch(onSubjectUpdated(value));
    };
    if (event.target.name === 'message') {
      this.props.dispatch(onMessageUpdated(value));
    };
  };

  handleSubmit() {
    this.props.dispatch(validateForm());
  };

  render() {
    let showNameError;
    let showEmailError;
    let showSubjectError;
    let showMessageError;

    if (this.props.errorFound) {
      this.props.errors.forEach(error => {
        if (error === 1) {
          showNameError = "Name field can't be empty."
        } else if (error === 2) {
          showEmailError = "Email address is not valid."
        } else if (error === 3) {
          showEmailError = "Email field can't be empty."
        } else if (error === 4) {
          showSubjectError = "Topic field can't be empty."
        } else if (error === 5) {
          showMessageError = "Message field can't be empty."
        }
      });
    };

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
                <p className="error">{showNameError}</p>
  					   <label htmlFor="contactName">Name <span className="required">*</span></label>
  					   <input type="text"
                      size="35"
                      id="contactName"
                      name="name"
                      value={this.props.name}
                      onChange={this.handleChange}/>
              </div>

              <div>
                <p className="error">{showEmailError}</p>
  					   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
  					   <input type="text"
                      size="35"
                      id="contactEmail"
                      name="email"
                      value={this.props.email}
                      onChange={this.handleChange}/>
              </div>

              <div>
                <p className="error">{showSubjectError}</p>
  					   <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
  					   <input type="text"
                      size="35"
                      id="contactSubject"
                      name="subject"
                      value={this.props.subject}
                      onChange={this.handleChange}/>
              </div>

              <div>
                <p className="error">{showMessageError}</p>
               <label htmlFor="contactMessage">Message <span className="required">*</span></label>
               <textarea cols="10"
                         rows="5"
                         id="contactMessage"
                         name="message"
                         value={this.props.message}
                         onChange={this.handleChange}>
               </textarea>
              </div>

              <div>
               <button onClick={this.handleSubmit} className="submit">Submit</button>
              </div>
         </div>

      </div>
   </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.form.name,
    email: state.form.email,
    subject: state.form.subject,
    message: state.form.message,
    errors: state.errors
  };
};

const connected = connect(mapStateToProps)(ContactForm);
export default connected;
