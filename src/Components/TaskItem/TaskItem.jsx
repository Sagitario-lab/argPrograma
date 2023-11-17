import {Box, Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";

export const TaskItem=({name, description, state, setTaskList, taskList, index, message,setMessage, setSnackbarOpen })=>{
    const [estado,setEstado]=useState(false)

    const filter = (index) => {
        const list = taskList.filter((_, idx) => idx !== index);
        setTaskList(list);
    }

    useEffect(() => {
        if (message) {
            setSnackbarOpen(true);
            const timeoutId = setTimeout(() => {
                setSnackbarOpen(false);
                setMessage("");
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [message]);


    return(
            <Box minWidth={'250px'} maxWidth={'250px'}>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton
                        aria-label="delete"
                        sx={{position:'relative', backgroundColor:'gray', left:209,top:1}}
                        onClick={()=> {
                            filter(index)
                            setMessage(' TAREA CREADA')
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                    <Box sx={{ fontSize: '2.5rem' }} color="text.secondary">
                        {name}
                    </Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:'1.5rem', overflow:'hidden'}}>
                        {description}
                    </Box>
                </Box>
                {
                    estado ?
                    <Button variant={'outlined'} color={'success'} onClick={()=>{
                        setEstado(!estado)
                        setMessage('tarea no terminada.')
                    }}>True</Button>
                    :
                    <Button variant={'outlined'} color={'error'} onClick={()=>{
                        setEstado(!estado)
                        setMessage('tarea terminada.')
                    }}>False</Button>
                }
            </Box>
    )
}