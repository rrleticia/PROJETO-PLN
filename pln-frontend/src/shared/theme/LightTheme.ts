import { createTheme, responsiveFontSizes } from "@mui/material";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";

const BaseTheme = createTheme({
  spacing: 8,
  palette: {
    text: {
      primary: "#000000",
      secondary: "#666666",
      disabled: "#9e9e9e",
    },
    primary: {
      main: "#ff78b7",
      dark: "#f5007d",
      light: "#ffe0ee",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#78ffc0",
      dark: "#00f695",
      light: "#e1fff0",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#ff7878",
      dark: "#ff4536",
      light: "#ffd0d6",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#ffe878",
      dark: "#fcde3e",
      light: "#fff5c4",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#ff78fa",
      dark: "#e700e3",
      light: "#ffe1fe",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#8eff78",
      dark: "#4ef835",
      light: "#d4ffc8",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.5rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
    },
  },
});

const options = {
  factor: 5,
};

export const LightTheme = responsiveFontSizes(BaseTheme, options);
