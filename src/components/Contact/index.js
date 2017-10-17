import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import Modal from "react-modal";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";

import { green500 } from "material-ui/styles/colors";

import "./Contact.css";

// const modalStyle = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     width: "200px",
//     backgroundColor: "rgba(255, 255, 255, 0.75)"
//   }
// };

export default class Contact extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
              <TextField floatingLabelText="your email" className="text" />
              {/* <br /> */}
              <TextField
                floatingLabelText="your message"
                rows={3}
                multiLine={true}
                className="text"
              />
              <br />
              <div className="buttons-container">
                <FlatButton
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
