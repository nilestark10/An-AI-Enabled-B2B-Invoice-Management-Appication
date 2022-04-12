import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { editData } from './servlet/data';

import '../CSS/App.css';


export default function CreateEditModalButton(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [row, setRow] = useState({
        sl_no: '',invoice_currency: '', cust_payment_terms: ''
    })


    let checkedList = props.checkCount;
    //console.log("at edit "+ checkedList);
    var edit
    if(checkedList.length==1){
        edit=false;    
    }
    else{edit=true}

    const changeHandler = async (e) => {

        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    }

    const editHandler = async (e) =>{
        e.preventDefault();
        //console.log(row);
        await editData(row , checkedList);
        setRow({invoice_currency: '', cust_payment_terms: ''});
        setOpen(false);

    }
    


   
    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen} disabled={edit}>EDIT</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="editbutton">
                <div className="txt">
                    <h3>Edit</h3>
                </div>
                <div className="edittextfield">
                    <div className="editfield">
                        <TextField label="Invoice Currency" name='invoice_currency' value={row.invoice_currency} variant="filled" onChange={changeHandler} />
                    </div>
                    <div>
                        <TextField label="Customer Payment terms" name='cust_payment_terms' value={row.cust_payment_terms} variant="filled" onChange={changeHandler} />
                    </div>
                </div>
                <div className="btn">
                    <Button className="edit" variant="outlined" color="secondary" onClick={editHandler}>EDIT</Button>
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                </div>
            </Box>
        </Modal>
    </>);
}