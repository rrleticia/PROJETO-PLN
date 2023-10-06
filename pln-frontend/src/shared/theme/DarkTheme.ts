import { createTheme, responsiveFontSizes } from '@mui/material';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';

const BaseTheme = createTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#666666',
      disabled: '#9e9e9e',
    },
    primary: {
      main: '#c9005c',
      dark: '#8c0053',
      light: '#f00063',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00c968',
      dark: '#009544',
      light: '#00f083',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#f13131',
      dark: '#d41c1d',
      light: '#ff4536',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#f8b637s',
      dark: '#ee7725',
      light: '#EF5350',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#b000ce',
      dark: '#7200bf',
      light: '#d800d6',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#00cf21',
      dark: '#009508',
      light: '#4ef835',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#3c3c3c',
      paper: '#5c5c5c',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '6rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.5rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
    },
  },
});

const options = {
  factor: 5,
};

export const DarkTheme = responsiveFontSizes(BaseTheme, options);
