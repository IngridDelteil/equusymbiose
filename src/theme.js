import {createTheme} from "@mui/material";

const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#5a4840",
      contrastText: "#d7cec7",
    },
    secondary: {
      main: "#626e60",
      contrastText: "#d7cec7",
    },
    text: {
      primary: "#5a4840",
      secondary: "#d7cec7",
    },
    background: {
      main: "#d7cec7",
      default: "#d7cec7",
    },
    error: {
      main: "#945d60",
      contrastText: "#d7cec7",
    },
    warning: {
      main: "#c09f80",
      contrastText: "rgb(62, 50, 44)",
    },
    info: {
      main: "#c09f80",
      contrastText: "rgb(62, 50, 44)",
    },
    success: {
      main: "#626e60",
      contrastText: "#d7cec7",
    },
    divider: "#5a4840",
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default themeOptions;
