import {useEffect, useState} from 'react';
import './App.css';
import { TaskForm } from "./Components/TaskForm/TaskForm.jsx";
import { TaskList } from "./Components/TaskList/TaskList.jsx";
import {Box, TextField} from "@mui/material";
import { SnackbarProvider} from 'notistack';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskListCopy,setTaskListCopy]=useState(taskList)
  const [query,setQuery]=useState()

  useEffect(()=>{
    const list= localStorage.getItem('List')
    setTaskList(JSON.parse(list))
    setTaskListCopy(JSON.parse(list))
  },[])

  useEffect(()=>{
    buscar(query)
  },[query])

  const buscar = (task)=>{
    const res=taskListCopy.filter(item=>{
      return item.name.toLowerCase().includes(task.toLowerCase())
    })
    setTaskList(res)
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
          <TaskForm taskList={taskList} setTaskList={setTaskList} setTaskListCopy={setTaskListCopy}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
          <TextField
              variant="filled"
              multiline
              fullWidth
              label={'Tarea...'}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{ style: { color: 'white' } }}
          />
        </Box>
        <Box>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </Box>
      </Box>
    </SnackbarProvider>
  );
}

export default App;


