import React, { Component } from "react";
import Modal from "react-modal";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import Cryptr from "cryptr";

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

  onChangeInput = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  getEmail = () => {
    const cryptr = new Cryptr("wowwhatagreatkey");
    return cryptr.decrypt("1243ba58f418d5f8b94abf8ff80ffa4e568abee7a322");
  };

  render() {
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
            <form
              className="contact-container"
              action={`https://formspree.io/${this.getEmail()}`}
              method="POST"
            >
              <h2>Send Me a Message</h2>
              <TextField
                floatingLabelText="your email"
                className="text"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChangeInput}
              />
              <TextField
                floatingLabelText="your message"
                rows={3}
                multiLine={true}
                className="text"
                name="message"
                type="text"
                value={this.state.message}
                onChange={this.onChangeInput}
              />
              <br />
              <div className="buttons-container">
                <FlatButton
                  type="submit"
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
              <input type="hidden" name="_next" value="/?email=success" />
            </form>
          </Paper>
        </Modal>
      </div>
    );
  }
}
