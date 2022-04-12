import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {AdvSearchData} from "./servlet/data.js"

export default function CreateAdvanceSearchModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setRow({
            doc_id: null, invoice_id: null, cust_number: null, buisness_year: null
        });
        setOpen(false);
    }

    const [row, setRow] = React.useState({
        doc_id: null, invoice_id: null, cust_number: null, buisness_year: null
    });

    const changeHandler = async (e) => {

        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();
       let response = await AdvSearchData(row);
        console.log("in adv 2", response.data);
        props.searchData(response.data.users);
        handleClose();
      
      }

    //   handleClose();
    
    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen}>ADVANCE SEARCH</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="advsearchbutton">
                <h3>Advance Search</h3>
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
                        <TextField label="Document ID" variant="filled" name="doc_id" value={row.doc_id} onChange={changeHandler} />
                        <TextField label="Invoice Id" name='invoice_id' variant="filled" value={row.invoice_id} onChange={changeHandler} />
                    </div>
                    <div>
                        <TextField label="Customer Number" variant="filled" name='cust_number' value={row.cust_number} onChange={changeHandler} />
                        <TextField label="Business Year" variant="filled" name='buisness_year'  value={row.buisness_year} onChange={changeHandler} />
                    </div>
                    <div className="btn">
                        <Button className="add" variant="outlined" color="secondary" onClick={submitHandler}>SEARCH</Button>
                        <Button className="add" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                    </div>
                </Box>

            </Box>
        </Modal>
    </>
    );
}
