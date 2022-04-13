import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicDatePicker from './datePicker';
import { Typography, TextField } from "@mui/material";
import AnalyticsModal from "./AnalyticsModal";

export default function CreateAnalyticModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setRow({clear_date1: null, clear_date2: null, due_in_date1: null, due_in_date2: null, invoice_currency: null, baseline_create_date1: null,baseline_create_date2: null})
        setOpen(false)
    };

    const [row, setRow] = React.useState({
         clear_date1: null, clear_date2: null, due_in_date1: null, due_in_date2: null, invoice_currency: null, baseline_create_date1: null,baseline_create_date2: null
        })

    
    const changeHandler = async (e) => {

        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    }

    const dateHandler = async (e) => {
        console.log(e);
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
                                <BasicDatePicker variant="filled" name= "clear_date1" value={row.clear_date1} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" name= "clear_date2" value={row.clear_date2} onChanged={dateHandler} />
                            </div>
                            <div className="analyticdiv">
                                <Typography>Due Date</Typography>
                                <BasicDatePicker variant="filled" name= "due_in_date1" value={row.due_in_date1} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" name= "due_in_date2" value={row.due_in_date2} onChanged={dateHandler} />
                            </div>
                        </div>
                        <div className="analyticsview">
                            <div className="analyticdiv">
                                <Typography>Baseline Create Date</Typography>
                                <BasicDatePicker variant="filled" name= "baseline_create_date1" value={row. baseline_create_date1} onChanged={dateHandler} />
                                <BasicDatePicker variant="filled" name= "baseline_create_date2" value={row. baseline_create_date2} onChanged={dateHandler} />
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
                
                    {/* <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>SUBMIT</Button> */}
                    <AnalyticsModal data={row}/>
                    <div className="btn">
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                </div>
            </Box>
        </Modal>
    </>);
}