import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { deleteData } from './servlet/data';


export default function CreateDeleteModalButton(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    let checkedList = props.deleteList;
    //console.log("at delete " + checkedList);



    const deleteHandler = async (e) => {
        e.preventDefault();
        //console.log("hello"+checkedList);
        await deleteData(checkedList);
        setOpen(false);
    }




    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen}>DELETE</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="deletebutton">
                <div className="txt">
                    <h3>Delete Records?</h3>
                    <p>Are you sure you want to delete these record[s]?</p>
                </div>
                <div className="btn">
                    <Button className="edit" variant="outlined" color="secondary" onClick={deleteHandler}>DELETE</Button>
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                </div>
            </Box>
        </Modal>
    </>);
}