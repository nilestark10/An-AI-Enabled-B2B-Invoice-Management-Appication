import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';

import '../CSS/App.css';

export default function BasicTextFields() {
  return (
    <ThemeProvider theme={theme}>
      <TextField id="outlined-basic" label="Search Customer Id" variant="filled" />
    </ThemeProvider>
  );
}



