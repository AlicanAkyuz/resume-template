import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class ContactRender extends Component {
  render() {
    let progress;
    if (this.props.load) {
      progress = <CircularProgress style={{color: '#fafafa'}} size={90} thickness={7} />
    };

    return (
      <section id="contact">
        <div className="thanks">
          <p className="thanksTitle">{this.props.title}</p>
          <p className="thanksContent">{this.props.content}</p>
          {progress}
        </div>
      </section>
    );
  }
}

export default ContactRender;
