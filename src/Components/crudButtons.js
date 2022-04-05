import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicTextFields from "./Searchfield";
import AddButton from "./addbutton";
import "../CSS/App.css";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 1400,
//     bgcolor: 'rgb(45,67,81)',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };




export function CreateEditModalButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen}>EDIT</Button>
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
                        <BasicTextFields />
                    </div>
                    <div>
                        <BasicTextFields />
                    </div>
                </div>
                <div className="btn">
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>EDIT</Button>
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                </div>
            </Box>
        </Modal>
    </>);
}

export function CreateDeleteModalButton({ deleteFn }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <Button className="edit" variant="outlined" color="secondary" onClick={handleClose}>CANCEL</Button>
                    <Button className="edit" variant="outlined" color="secondary" onClick={async () => {
                        await deleteFn();
                        handleClose();
                    }}>DELETE</Button>
                </div>
            </Box>
        </Modal>
    </>);
}

