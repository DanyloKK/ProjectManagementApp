import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelButton from "../CancelButton/CancelButton";

export default function ConfirmButton({handleDelete,handleClose}) {
    return (
        <Stack direction="row" spacing={2}>
            <Button color="success" variant="contained" onClick={handleDelete}>Yes</Button>
            <CancelButton handleClose={handleClose} />
        </Stack>
    );
}
