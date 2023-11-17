import {TaskItem} from "../TaskItem/TaskItem.jsx";
import {Box, Button, Card, CardContent, Snackbar} from "@mui/material";
import {useEffect, useState} from "react";

export const TaskList = ({ taskList, setTaskList }) => {
    const [message, setMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setMessage("");
    };

    return (
    <Box display={'flex'} gap={5} justifyContent={'center'} flexWrap={'wrap'}>
        {taskList.map((data, idx) => (
            <Card key={idx} variant="outlined">
                <CardContent>
                    <TaskItem
                        name={data.name}
                        description={data.description}
                        setTaskList={setTaskList}
                        taskList={taskList}
                        index={idx}
                        setSnackbarOpen={setSnackbarOpen}
                        message={message}
                        setMessage={setMessage}
                    />
                </CardContent>
            </Card>
        ))}
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message={message}
        />
    </Box>
    );
}