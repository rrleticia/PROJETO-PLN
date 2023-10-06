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
      main: "#157AFF",
      dark: "#1E88E5",
      light: "#42A5F5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9C27B0",
      dark: "#7B1FA2",
      light: "#BA68C8",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#ED6C02",
      dark: "#E65100",
      light: "#FF9800",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      light: "#03A9F4",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#2E7D32",
      dark: "#1B5E20",
      light: "#4CAF50",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
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

export const AppTheme = responsiveFontSizes(BaseTheme, options);
