import { useState } from 'react'
import './App.css'
import {TaskForm} from "./Components/TaskForm/TaskForm.jsx";
import {TaskList} from "./Components/TaskList/TaskList.jsx";
import {Box} from "@mui/material";

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div style={{backgroundColor: 'dimgrey'}}>
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <TaskForm taskList={taskList} setTaskList={setTaskList}/>
        </Box>
        <div>
            <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>
        </div>
    </div>
  )
}

export default App
