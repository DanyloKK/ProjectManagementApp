import * as React from 'react';
import Box from '@mui/material/Box';
import ConfirmButton from "../ConfirmButton/ConfirmButton"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom'
import styles from "./ModalWindow.module.css"
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


export default function ModalWindow({id,open,setOpen}) {
    const navigate = useNavigate();
    const handleClose = () => setOpen(false);
    const handleDelete = () => {
        const existingProjects = JSON.parse(localStorage.getItem('formState')) || [];
        const updatedProjects = existingProjects.filter((item) => String(item.id) !== id);
        localStorage.setItem('formState', JSON.stringify(updatedProjects));
        handleClose();
        navigate("/Projects")
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete the project?
                    </Typography>
                    <div className={styles.modal__block}>
                        <ConfirmButton handleDelete={handleDelete} handleClose={handleClose} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}