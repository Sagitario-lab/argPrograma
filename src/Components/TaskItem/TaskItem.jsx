import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import "./TaskItemEstilos.css";

const TaskItem = ({ name, description, state, setTaskList, taskList, index }) => {
    const [estado, setEstado] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const filter = (index) => {
        const list = taskList.filter((_, idx) => idx !== index);
        setTaskList(list);
        localStorage.setItem('List', JSON.stringify(list))
    };

    const handleEstado = () =>{
        setEstado(!estado)
        if (estado) {
            enqueueSnackbar('Tarea no terminada.', { variant: 'error',autoHideDuration: 1000 });
            
        } else {
            enqueueSnackbar('Tarea terminada.', { variant: 'success',autoHideDuration: 1000 });
            
        }
        
    }
    const deleteCard = () => {
        enqueueSnackbar('Tarea Eliminada.', { variant: 'error',autoHideDuration: 1000 });
        
    }
    


return (
    <Box width={"270px"} height={'190px'} className="itemPadre">
    <Box className={"boxInfo"}>
        <IconButton
            className='button'
            aria-label="delete"
            sx={{ position: 'relative', backgroundColor: 'gray', left: 230, top: 0 }}
            onClick={() => {
            deleteCard();
            filter(index);}}
        >
        <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </IconButton>
        <Box sx={{ fontSize: '2.0rem' }} className="tituloItem">
            {name}
        </Box>
        </Box>
        <Box>
        <Box sx={{ fontSize: '1.1rem', overflow: 'hidden', paddingTop:"10px",  paddingBottom:"20px" }} className="descripcionItem">{description}</Box>
        </Box>
        <Button
            variant={'outlined'}
            color={estado ? 'success' : 'error'}
            onClick={() => {
            handleEstado();
        }}
        >
        {estado ? 'Completa' : 'Incompleta'}
        </Button>
    
        </Box>
    );
};

export default TaskItem;

