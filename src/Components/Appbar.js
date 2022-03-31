import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme.js';
import '../CSS/App.css';
export default function MyAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="logo" />
      </AppBar>
      </ThemeProvider>
  );
}
