import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AlexTheme from "./CustomTheme";
import "./index.css";
import Routes from "./components/Routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <MuiThemeProvider muiTheme={AlexTheme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
