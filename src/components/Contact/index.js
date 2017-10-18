import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import Modal from "react-modal";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";

import { green500 } from "material-ui/styles/colors";

// import EmailService from "../../services/nodemailer";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    open: false,
    email: "",
    message: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // handleSubmit = () => {
  //   EmailService.send({this.state})
  // }

  onChangeInput = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div>
        <FlatButton
          label="CONTACT"
          onClick={this.handleOpen}
          className="navbar-button"
        />

        <Modal
          isOpen={this.state.open}
          contentLabel="Modal"
          className={{ afterOpen: "contact-modal" }}
        >
          <Paper zDepth={4}>
            <div className="contact-container">
              <h2>Send Me a Message</h2>
              <TextField
                floatingLabelText="your email"
                className="text"
                name="email"
                value={this.state.email}
                onChange={this.onChangeInput}
              />
              <TextField
                floatingLabelText="your message"
                rows={3}
                multiLine={true}
                className="text"
                name="message"
                value={this.state.message}
                onChange={this.onChangeInput}
              />
              <br />
              <div className="buttons-container">
                <FlatButton
                  // onClick={this}
                  label="Submit"
                  className="message-button"
                  id="submit-button"
                />
                <FlatButton
                  onClick={this.handleClose}
                  label="Cancel"
                  id="cancel-button"
                  className="message-button"
                />
              </div>
            </div>
          </Paper>
        </Modal>
      </div>
    );
  }
}
