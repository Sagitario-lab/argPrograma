import {TaskItem} from "../TaskItem/TaskItem.jsx";
import {Box, Button, Card, CardContent} from "@mui/material";

export const TaskList = ({ taskList, setTaskList }) => {

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
                        state={data.state}
                    />
                </CardContent>
            </Card>
        ))}
    </Box>
    );
}