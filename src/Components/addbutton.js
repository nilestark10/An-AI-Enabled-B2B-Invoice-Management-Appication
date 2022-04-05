// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import BasicDatePicker from './datePicker';
// import { addData, getData } from './servlet/data';


// export default function CreateAddModalButton() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [data, setData] = useState([]);
//   const [row, setRow] = React.useState({
//     business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id:'', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
//     document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
//   })

//   const changeHandler = async (e) => {
//     console.log("dateHandler44");
//     const { name, value } = e.target;
//     setRow({ ...row, [name]:value});
//   }
//   const dateHandler = async (e) => {
//     console.log("dateHandler");
//     const { name, value } = e.target;
//     setRow({ ...row, [name]:value});
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log(row);
//     let response = await addData(row)
//     if (response.status) {
//       setData(await getData())
//       setRow({
//         business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id:'', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
//         document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
//       })

//     }
//   }

//   useEffect(async () => {
//     setData(await getData())

//   }, []);



//   return (<>
//     <Button className="createbtn" variant="outlined" onClick={handleOpen}>ADD</Button>
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description">
//       <Box className="addbutton">
//         <h3>Add</h3>
//         {/* need to be styled */}
//         <Box
//           component="form"
//           sx={{
//             '& .MuiTextField-root': { m: 1, width: '300px' },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <div>
//             <TextField label="Business Code" variant="filled" name="business_code" value={data.business_code} onChange={changeHandler} />
//             <TextField label="Customer Number" variant="filled" name='cust_number' value={data.cust_number} onChange={changeHandler} />
//             <TextField label="Clear Date" name='clear_date' value={data.clear_date} onChange={dateHandler} />
//             <TextField label="Business Year" variant="filled" name='buisness_year' value={data.buisness_year} onChange={changeHandler} />
//           </div>
//           <div >
//           <TextField label="Document Id " variant="filled" name='doc_id' value={data.doc_id} onChange={changeHandler} />
//             <TextField label="Posting Date" name='posting_date' value={data.posting_date} onChange={changeHandler} />
//             <TextField label="Document Create Date" name='document_create_date' value={data.document_create_date} onChange={changeHandler} />
//             <TextField label="Due Date" name='due_in_date' value={data.due_in_date} onChange={changeHandler} />
            

//           </div>
//           <div >
//             <TextField label="Invoice Currency" name='invoice_currency' value={data.invoice_currency} variant="filled" onChange={changeHandler} />
//             <TextField label="Document type" name='document_type' value={data.document_type} variant="filled" onChange={changeHandler} />
//             <TextField label="Posting Id" name='posting_id' value={data.posting_id} variant="filled" onChange={changeHandler} />
//             <TextField label="Total open amount" name='total_open_amount' value={data.total_open_amount} variant="filled" onChange={changeHandler} />
//           </div>
//           <div >
//             <TextField label="Baseline Create Date" name='baseline_create_date' value={data.baseline_create_date} onChange={changeHandler} />
//             <TextField label="Customer Payment terms" name='cust_payment_terms' value={data.cust_payment_terms} variant="filled" onChange={changeHandler} />
//             <TextField label="Invoice Id" name='invoice_id' value={data.invoice_id} variant="filled" onChange={changeHandler} />
//           </div>

//         </Box>
//         <div className="btn">
//           <Button className="add" variant="outlined" color="secondary" onClick={submitHandler}>ADD</Button>
//           <Button className="add" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
//         </div>
//       </Box>
//     </Modal>
//   </>

//   );
// }
// /*
// name='business_code' value={data.business_code}
// name='cust_number' value={cust_number} 
// name='clear_date' value={clear_date}
// name='buisness_year' value={buisness_year}
// name='posting_date' value={posting_date}
// name='document_create_date' value={document_create_date}
// name='due_in_date' value={due_in_date}
// name='invoice_currency' value={invoice_currency}
// name='document_type' value={document_type} 
// name='posting_id' value={posting_id}
// name='total_open_amount' value={total_open_amount}
// name='baseline_create_date' value={baseline_create_date} 
// name='cust_payment_terms' value={cust_payment_terms}
// name='invoice_id' value={invoice_id} 

// {business_code, cust_number, clear_date, buisness_year,
//   posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount,
//   baseline_create_date, cust_payment_terms, invoice_id, changeHandler, clickHandler}


// */