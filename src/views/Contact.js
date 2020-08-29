import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, subject, message } = this.state;

    let templateParams = {
      from_name: `${firstName} ${lastName} (${email})`,
      to_name: 'michael.spikes85@gmail.com',
      subject,
      message_html: message,
    };

    const response = await emailjs.send(
      'gmail',
      'template_AXm5ZCQA',
      templateParams,
      'user_hdk6yXYSk7WzryucP0R90'
    );

    console.log(response);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <main className="container flex-column">
        <div className="form-row">
          <div className="col-lg-6 col-sm-12">
            <label className="text-warning">First Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your first name"
              value={this.state.firstName}
              onChange={(e) => this.handleChange('firstName', e)}
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="text-warning">Last Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your last name"
              value={this.state.lastName}
              onChange={(e) => this.handleChange('lastName', e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-lg-6 col-sm-12">
            <label className="text-warning">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={(e) => this.handleChange('email', e)}
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="text-warning">Subject</label>
            <input
              className="form-control"
              type="text"
              placeholder="Subject of your email"
              value={this.state.subject}
              onChange={(e) => this.handleChange('subject', e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label className="text-warning">Message</label>
            <textarea
              className="form-control"
              type="text"
              placeholder="Message to send"
              value={this.state.message}
              rows="10"
              onChange={(e) => this.handleChange('message', e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-lg-6 col-sm-12 mt-3">
            <button
              className="form-control btn btn-warning btn-block"
              onClick={(e) => this.handleSubmit(e)}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
