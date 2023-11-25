import { Box, Button, TextField} from "@mui/material";
import { useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';
import "./TaskFormEstilos.css";


export const TaskForm = ({ taskList, setTaskList }) => {
    const [nombre, setNombre] = useState("");
    const [desc, setDesc] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const tarjetaCreada = () => {
        enqueueSnackbar('Tarjeta Creada', { variant: 'info', autoHideDuration: 1000 });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
    
        if (!taskList) {
            setTaskList([]);
        }
    
        const newTaskList = [...taskList, { name: nombre, description: desc }]

        setTaskList(newTaskList);
        tarjetaCreada();
    
        setNombre("");
        setDesc("");

        localStorage.setItem('List', JSON.stringify(newTaskList))
    }


    return (
    <form onSubmit={onSubmitForm} className="formulario">
        <h1>Argentina Programa</h1>
        <p>Todo List</p>
        <Box className="box1">
            <TextField
                className="tareaNombre"
                variant="filled"
                label={'Nombre de la tarea'}
                value={nombre}
                size="small"
                onChange={(e) => setNombre(e.target.value)}
                required
            />
        </Box>
        <Box className="box2">
            <TextField
                className="tareaNombre"
                variant="filled"
                multiline
                fullWidth
                label={'Descripción'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
        </Box>
        <Box className="box3">
            <Button type={'submit'}className="pushable" id="botonCrear">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front">Crear</span>
            </Button>
        </Box>
    </form>
    );
};

export default TaskForm;