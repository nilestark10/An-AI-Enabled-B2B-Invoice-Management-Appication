import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function CreateAdvSearchModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setRow({
            doc_id: '', invoice_id: '', cust_number: '', buisness_year: ''
        });
        setOpen(false);
    };

    const [row, setRow] = React.useState({
        doc_id: '', invoice_id: '', cust_number: '', buisness_year: ''
    });

    const changeHandler = async (e) => {

        const { name, value } = e.target;
        setRow({ ...row, [name]: value });
    };
    
    const submitHandler = (e) => {
      props.onClickSearchFn({
          row 
      });

      handleClose();
    }
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