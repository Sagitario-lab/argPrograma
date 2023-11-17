import {TaskItem} from "../TaskItem/TaskItem.jsx";
import {Box, Button, Card, CardContent} from "@mui/material";

export const TaskList = ({ taskList, setTaskList }) => {

    const filter = (index) => {
        const list = taskList.filter((_, idx) => idx !== index);
        setTaskList(list);
    }

    return (
    <Box display={'flex'} gap={5} justifyContent={'center'} flexWrap={'wrap'}>
        {taskList.map((data, idx) => (
        <Card key={idx} variant="outlined">
            <CardContent>
                <TaskItem name={data.name} description={data.description} />
                <Button onClick={() => filter(idx)}>Eliminar</Button>
            </CardContent>
        </Card>
        ))}
    </Box>
    );
}