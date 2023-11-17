import {TaskItem} from "../TaskItem/TaskItem.jsx";
import {Box, Button, Card, CardContent} from "@mui/material";

export const TaskList=({taskList,setTaskList})=>{

    const filter=(taskName)=>{
        const list=taskList.filter((data)=>{
            return data.name !== taskName
        })
        console.log(list)
        setTaskList(list)
    }


    return(
        <Box display={'flex'} gap={5} justifyContent={'center'} flexWrap={'wrap'}>
            {taskList.map((data,idx)=>{
                return(
                    <Card key={idx} variant="outlined">
                        <CardContent >
                            <TaskItem  name={data.name} description={data.description}/>
                            <Button onClick={()=>{
                                filter(data.name)
                                console.log(taskList)
                            }}>{idx}</Button>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    )
}