import React, {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicDatePicker from './datePicker';
import { addData, getData } from './servlet/data';


export default function CreateAddModalButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setRow({
      business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
      document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
    });
    setOpen(false);
  };

  // const [data, setData] = useState([]);
  const [row, setRow] = React.useState({
    business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
    document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
  })

  const changeHandler = async (e) => {

    const { name, value } = e.target;
    setRow({ ...row, [name]: value });
  }

  //datehandler
  const dateHandler = async (e) => {
    console.log(e.value);
    const { name, value } = e;
    setRow({ ...row, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(row);
    let response = await addData(row)
    //var response={status:200};
    

    if (response.status === 200) {
      //console.log("status = ", response.status, typeof (response.status))

      setRow({
        business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
        document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
      })
      //console.log("cleared text field");
      props.callback(true);
      // setData(await getData());
      setOpen(false);

    }
  }

  // useEffect(async () => {
  //   setData(await getData())

  // }, []);



  return (<>
    <Button className="createbtn" variant="outlined" onClick={handleOpen}>ADD</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box className="addbutton">
        <h3>Add</h3>
        {/* need to be styled */}
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '300px' },
          }}
          noValidate
          autoComplete="off"
        >
        <div>
          <div>
            <TextField label="Business Code" variant="filled" name="business_code" value={row.business_code} onChange={changeHandler} required/>
            <TextField label="Customer Number" variant="filled" name='cust_number' value={row.cust_number} onChange={changeHandler} required/>
            <BasicDatePicker label="Clear Date" name='clear_date' value={row.clear_date} onChanged={dateHandler} />
            <TextField label="Business Year" variant="filled" name='buisness_year' value={row.buisness_year} onChange={changeHandler} />
          </div>
          <div >
            <TextField label="Document Id " variant="filled" name='doc_id' value={row.doc_id} onChange={changeHandler} />
            <BasicDatePicker label="Posting Date" name='posting_date' value={row.posting_date} onChanged={dateHandler} />
            <BasicDatePicker label="Document Create Date" name='document_create_date' value={row.document_create_date} onChanged={dateHandler} />
            <BasicDatePicker label="Due Date" name='due_in_date' value={row.due_in_date} onChanged={dateHandler} />


          </div>
          <div >
            <TextField label="Invoice Currency" name='invoice_currency' value={row.invoice_currency} variant="filled" onChange={changeHandler} />
            <TextField label="Document type" name='document_type' value={row.document_type} variant="filled" onChange={changeHandler} />
            <TextField label="Posting Id" name='posting_id' value={row.posting_id} variant="filled" onChange={changeHandler} />
            <TextField label="Total open amount" name='total_open_amount' value={row.total_open_amount} variant="filled" onChange={changeHandler} />
          </div>
          <div >
            <BasicDatePicker label="Baseline Create Date" name='baseline_create_date' value={row.baseline_create_date} onChanged={dateHandler} />
            <TextField label="Customer Payment terms" name='cust_payment_terms' value={row.cust_payment_terms} variant="filled" onChange={changeHandler} />
            <TextField label="Invoice Id" name='invoice_id' value={row.invoice_id} variant="filled" onChange={changeHandler} />
          </div>
        </div>
        </Box>
        <div className="btn">
          <Button className="add" variant="outlined" color="secondary" onClick={submitHandler}>ADD</Button>
          <Button className="add" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
        </div>
      </Box>
    </Modal>
  </>

  );
}
