import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import SvgIcon from "material-ui/SvgIcon";
import FlatButton from "material-ui/FlatButton";

import Contact from "../Contact";

import { Github, Torah, LinkedIn } from "../CustomSvg";

import "./Navbar.css";

const Navbar = () =>
  <AppBar
    // title="Alex Willenbrink"
    iconElementLeft={
      <div className="appbar-icons">
        <a href="https://github.com/Alex-Willenbrink" target="_blank">
          <IconButton tooltip="Github">
            <SvgIcon>
              <Github fill="white" />
            </SvgIcon>
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/alex-willenbrink-707856104/"
          target="_blank"
        >
          <IconButton tooltip="LinkedIn">
            <SvgIcon>
              <LinkedIn fill="white" />
            </SvgIcon>
          </IconButton>
        </a>
        <a href="https://programmer53blog.wordpress.com/" target="_blank">
          <IconButton tooltip="Personal Blog">
            <SvgIcon>
              <Torah fill="white" />
            </SvgIcon>
          </IconButton>
        </a>
      </div>
    }
    iconElementRight={
      <div className="appbar-links">
        <FlatButton label="Portfolio" className="navbar-button" />
        <Contact />
      </div>
    }
  />;

export default Navbar;
