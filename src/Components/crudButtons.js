import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function CreateAddModalButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <Button className="createbtn" variant="outlined" onClick={handleOpen}>ADD</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <h1>hello</h1>
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
            <Box sx={style}>
                <Button className="createbtn" variant="outlined" onClick={handleClose}>CANCEL</Button>
                <Button className="createbtn" variant="outlined" onClick={async () => {
                    await deleteFn();
                    handleClose();
                }}>DELETE</Button>
            </Box>
        </Modal>
    </>);
}

