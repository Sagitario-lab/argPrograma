import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';

export const TaskForm = ({ taskList, setTaskList }) => {
    const [nombre, setNombre] = useState("");
    const [desc, setDesc] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const tarjetaCreada = () => {
        enqueueSnackbar('Tarjeta Creada', { variant: 'info', autoHideDuration: 1000 });
    };

    const onSubmitForm = (e) => {
        e.preventDefault(); 
        setTaskList([...taskList, { name: nombre, description: desc }]);
        tarjetaCreada();
    
        setNombre("");
        setDesc("");
    }

    const saveTaskList=()=>{
        localStorage.setItem('List', JSON.stringify(taskList))
    }

    return (
    <form onSubmit={onSubmitForm}>
        <Box>
            <TextField
                variant="filled"
                label={'Nombre de la tarea'}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
        </Box>
        <Box>
            <TextField
                variant="filled"
                label={'Descripción'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
        </Box>
        <Box>
            <Button type={'submit'}>Crear</Button>
            <Button onClick={()=>{saveTaskList()}}>Guardar</Button>
        </Box>
    </form>
    );
};

export default TaskForm;