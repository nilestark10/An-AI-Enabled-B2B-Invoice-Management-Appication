import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker(props) {
//   const [value, setValue] = React.useState(props.value==""?null:props.value);
//   useEffect(async () => {
//     console.log("at use effect in date picker",props.value);
//     setValue(props.value==""?null:props.value);

// }, []);

// console.log("rebuild basic datepicker");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  renderInput={(props) => <TextField variant='filled'{...props} />}
                  label={props.label}
                  views={["year", "month", "day"]}
                  value={props.value==""?null:props.value}
                  inputFormat="yyyy-MM-dd"

                  onChange={(e) => {
                    var date =(e.getDate()<10 ? `0${e.getDate()}`:`${e.getDate()}`);
                    var month =((e.getMonth()+1)<10 ? `0${(e.getMonth()+1)}`:`${(e.getMonth()+1)}`);
                    var formattedDate=`${e.getFullYear()}-${month}-${date}`;
                    // setValue(e);

                    props.onChanged({name:props.name, value:formattedDate});
                    
                  }}
                />
              </LocalizationProvider>
  );
}

