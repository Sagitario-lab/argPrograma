import {Box, Button, Card, CardContent, Snackbar} from "@mui/material";
import {useEffect, useState} from "react";
import TaskItem from '../TaskItem/TaskItem';
import { SnackbarProvider, useSnackbar } from 'notistack';


export const TaskList = ({ taskList, setTaskList,enqueueSnackbar }) => {
    const [message, setMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        
    };

    return (
    <Box display={'flex'} gap={5} justifyContent={'center'} flexWrap={'wrap'}>
        {taskList?.map((data, idx) => (
            <Card key={idx} variant="outlined">
                <CardContent>
                    <TaskItem
                        name={data.name}
                        description={data.description}
                        setTaskList={setTaskList}
                        taskList={taskList}
                        index={idx}
                        message={message}
                    />
                </CardContent>
            </Card>
        ))}
        
    </Box>
    );
}
