import getMuiTheme from "material-ui/styles/getMuiTheme";

import { green700, teal600, grey900 } from "material-ui/styles/colors";

export default getMuiTheme({
  // spacing: spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: grey900,
    primary2Color: green700,
    primary3Color: teal600
    // accent1Color: teal600,
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack
  }
});
