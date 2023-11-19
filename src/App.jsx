import {useEffect, useState} from 'react';
import './App.css';
import { TaskForm } from "./Components/TaskForm/TaskForm.jsx";
import { TaskList } from "./Components/TaskList/TaskList.jsx";
import { Box } from "@mui/material";
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  const [taskList, setTaskList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(()=>{
    const list= localStorage.getItem('List')
    setTaskList(JSON.parse(list))
  },[])

  return (
    <SnackbarProvider maxSnack={3}>
      <div style={{ backgroundColor: 'dimgrey' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TaskForm taskList={taskList} setTaskList={setTaskList} />
        </Box>
        <Box>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </Box>
      </div>
    </SnackbarProvider>
  );
}

export default App;


