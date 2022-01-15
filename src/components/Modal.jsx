import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { updateTodo } from '../store/action';
// import data from './Todos';


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

export default function KeepMountedModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newTitle, setNewTitle] = useState("")

    const dispatch = useDispatch()


    function handleEdit(e) {
        // console.log(e)

        let payload = { ...e, newTitle: newTitle }
        dispatch(updateTodo(payload))
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <input onChange={(e) => setNewTitle(e.target.value)} /> <button onClick={() => handleEdit(props.data)}>save</button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
