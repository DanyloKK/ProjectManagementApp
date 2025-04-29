import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CancelButton({handleClose}) {
    return (
        <Stack direction="row" spacing={2}>
            <Button  onClick={handleClose} variant="contained" color="error">No</Button>
        </Stack>
    );
}