import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

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
        <FlatButton label="open modal" onClick={this.handleOpen} />
        <Dialog
          title="Dialog Example"
          modal={true}
          open={this.state.open}
          actions={actions}
        >
          Some Sample Text
        </Dialog>
      </div>
    );
  }
}
