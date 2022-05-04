import * as React from 'react';
import TextField from '@mui/material/TextField';

import '../CSS/App.css';

export default function BasicTextFields(props) {

  const [searchTerm , setSearchTerm] = React.useState()
  
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    //console.log("hello in searfield"+searchTerm);
  }
  props.searchItem(searchTerm)
  return (
      <TextField id="outlined-basic" label="Search Customer Id" variant="filled" onChange={searchHandler}/>  
  );
}



