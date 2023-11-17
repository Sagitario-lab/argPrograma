import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

export const TaskForm=({taskList,setTaskList})=>{
    const [nombre,setNombre]=useState()
    const [desc,setDesc]=useState()



    return(
        <form onSubmit={(e)=>e.preventDefault()} >
           <Box>
               <TextField variant="filled" label={'Nombre de la tarea'} onChange={(e)=>{setNombre(e.target.value)}}/>
           </Box>
            <Box>
                <TextField variant="filled" label={'Descripción'} onChange={(e)=>{setDesc(e.target.value)}}/>
            </Box>
            <Box>
                <Button type={'submit'} onClick={()=>{
                    setTaskList([...taskList, {name: nombre, description:desc, state:false}])
                }}>Crear</Button>
            </Box>
        </form>
    )
}