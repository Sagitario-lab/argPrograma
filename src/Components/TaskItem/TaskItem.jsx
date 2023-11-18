import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { SnackbarProvider, useSnackbar } from 'notistack';

const TaskItem = ({ name, description, state, setTaskList, taskList, index }) => {
    const [estado, setEstado] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const filter = (index) => {
        const list = taskList.filter((_, idx) => idx !== index);
        setTaskList(list);
    };

    const handleEstado = () =>{
        setEstado(!estado)
        if (estado) {
            enqueueSnackbar('Tarea terminada.', { variant: 'error',autoHideDuration: 1000 });
            
        } else {
            enqueueSnackbar('Tarea no terminada.', { variant: 'success',autoHideDuration: 1000 });
            
        }
        
    }
    const deleteCard = () => {
        enqueueSnackbar('Tarea Eliminada.', { variant: 'error',autoHideDuration: 1000 });
    }
    


return (
    <Box minWidth={'250px'} maxWidth={'250px'}>
    <Box display={'flex'} alignItems={'center'}>
        <IconButton
            aria-label="delete"
            sx={{ position: 'relative', backgroundColor: 'gray', left: 209, top: 1 }}
            onClick={() => {
            deleteCard();
            filter(index);
        }}
        >
        <DeleteIcon />
        </IconButton>
        <Box sx={{ fontSize: '2.5rem' }} color="text.secondary">
            {name}
        </Box>
        </Box>
        <Box>
        <Box sx={{ fontSize: '1.5rem', overflow: 'hidden' }}>{description}</Box>
        </Box>
        <Button
            variant={'outlined'}
            color={estado ? 'success' : 'error'}
            onClick={() => {
            handleEstado();
        }}
        >
        {estado ? 'True' : 'False'}
        </Button>
    
        </Box>
    );
};

export default TaskItem;

