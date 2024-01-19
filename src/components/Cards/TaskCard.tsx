import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import Box from '@mui/material/Box';
import {Task} from "../../types/auth/types";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const TaskCard = ({ task }: { task: Task }) => {
    return (
        <Card key={task.id} sx={{ marginBottom: 2 }}>
            <CardContent>
                {/* 1st Row */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                    }}
                >
                    <div style={{ width: '50px', height: '30px', backgroundColor: 'pink' }}>
                        {/* Placeholder for dropdown */}
                    </div>
                </Box>

                {/* 2nd Row */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '1rem',
                    }}
                >
                    <IconButton color="primary" aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, marginRight: 'auto' }}>
                        {task.title}
                    </Typography>
                    {task.AI_created && (
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
                            <StarIcon fontSize="small" sx={{ marginRight: '0.2rem' }} />
                            <Typography variant="body2">AI</Typography>
                        </Box>
                    )}
                </Box>

                {/* 3rd Row */}
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                    {task.description}
                </Typography>

                {/* 4th Row */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: 'grey',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    >
                        <div>
                            <TextField
                                value={task.timeToComplete}
                                InputProps={{ disableUnderline: true, style: { color: 'white', textAlign: 'center' } }}
                            />
                            <AccessTimeIcon fontSize="small" />
                        </div>
                    </Box>
                    <Box
                        sx={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: 'grey',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    >
                        <div>
                            <TextField
                                value={task.deadline}
                                InputProps={{ disableUnderline: true, style: { color: 'white', textAlign: 'center' } }}
                            />
                            <EventIcon fontSize="small" />
                        </div>
                    </Box>
                    <Box sx={{ width: '30px', height: '30px' }}>
                        {/* Image Placeholder */}
                    </Box>
                </Box>

            </CardContent>
        </Card>
    );
};
