import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicDatePicker from './datePicker';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="Business Code" variant="filled"/>
        <TextField label="Customer Number" variant="filled"/>
        <BasicDatePicker label="Clear Date" />
        <TextField label="Business Year" variant="filled"/>
      </div>
      <div >
        <TextField label="Document id" variant="filled"/>
        <BasicDatePicker label="Posting Date" />
        <BasicDatePicker label="Document Create Date"/>
        <BasicDatePicker label="Due Date"/>

      </div>
      <div >
        <TextField label="Invoice Currency" variant="filled"/>
        <TextField label="Document type" variant="filled"/>
        <TextField label="Posting Id" variant="filled"/>
        <TextField label="Total open amount" variant="filled"/>
      </div>
      <div >
        <BasicDatePicker label="Baseline Create Date"/>
        <TextField label="Customer Payment terms" variant="filled"/>
        <TextField label="Invoice Id" variant="filled"/>
      </div>
    </Box>
  );
}
