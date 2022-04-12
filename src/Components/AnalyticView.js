import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicDatePicker from './datePicker';
import { Typography, TextField } from "@mui/material";

export default function CreateAnalyticModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [row, setRow] = React.useState({
        business_code: '', cust_number: '', clear_date: '', buisness_year: '', doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '',
        document_type: '', posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
    })

    
    const changeHandler = async (e) => {

        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    }

    const dateHandler = async (e) => {
        //console.log(e);
        const { name, value } = e;
        setRow({ ...row, [name]: value });
    }

    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen}>ANALYTICS VIEW</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="analyticview">
                <h3>Analytics View</h3>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '300px' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="analyticdiv">
                        <div className="analyticsview">
                            <div className="analyticdiv">
                                <Typography>Clear Date</Typography>
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                            </div>
                            <div className="analyticdiv">
                                <Typography>Due Date</Typography>
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                            </div>
                        </div>
                        <div className="analyticsview">
                            <div className="analyticdiv">
                                <Typography>Baseline Create Date</Typography>
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" value={row.clear_date} onChanged={dateHandler} />
                            </div>

                            <div>

                                <div className="analyticdiv">
                                    <Typography>Invoice Currency</Typography>
                                    <TextField label="Invoice Currency" variant="filled" name='invoice_currency' value={row.invoice_currency} onChange={changeHandler} />
                                </div>
                            </div>
                        </div>

                    </div>


                </Box>
                <div className="btn">
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>SUBMIT</Button>
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                </div>
            </Box>
        </Modal>
    </>);
}