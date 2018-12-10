import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactRender from './ContactRender';

class Contact extends Component {
  render() {
    let renderContact;
    if (this.props.submitted === false) {
      renderContact = <ContactForm />
    };

    if (this.props.load === true) {
      renderContact = <ContactRender
        title="Just a second!"
        content="Your message is being processed..."
        load="load" />
    };

    if (this.props.success === true) {
      renderContact = <ContactRender
        title="Your message has been received!"
        content="Thank you! I will contact you shortly." />
    };

    if (this.props.failure === true) {
      renderContact = <ContactRender
        title="Ups..!"
        content="There has been a server problem, please try again!" />
    };

    if (this.props.error === true) {
      renderContact = <ContactForm errorFound="errorFound" />
    };

    return (
      <div>
        {renderContact}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    submitted: state.submitted,
    load: state.load,
    success: state.success,
    failure: state.failure,
    error: state.error
  };
};

const connected = connect(mapStateToProps)(Contact);
export default connected;
