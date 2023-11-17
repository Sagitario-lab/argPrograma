import {Box, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskItem=({name, description})=>{



    return(
            <Box minWidth={'250px'} maxWidth={'250px'}>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton aria-label="delete" sx={{position:'relative', backgroundColor:'gray', left:209,top:1}} onClick={()=> {

                    }}>
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
            </Box>
    )
}