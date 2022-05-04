import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import Icon1 from "../image/Group.svg";
import Icon2 from "../image/logo.svg";
import '../CSS/App.css';
import { Typography } from '@mui/material';
export default function MyAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <div>
          <img className='Logo1' src={Icon1} alt="Icon1" />
          <img className="Logo2" src={Icon2} alt="Icon2" />
        </div>
        <div>
          <Typography variant="h5" className='invoicetext'>Invoice List</Typography>
        </div>

      </AppBar>
    </ThemeProvider>
  );
}