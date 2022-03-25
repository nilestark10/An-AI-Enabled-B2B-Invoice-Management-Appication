import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import '@mui/material/styles';
import '../CSS/App.css';

export default function MyAppBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style = {{backgroundColor :"#1e3f94"}} position="static">
        <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="logo" />
      </AppBar>
    </Box>
  );
}
