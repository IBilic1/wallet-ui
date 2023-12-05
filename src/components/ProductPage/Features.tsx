import React from 'react';
import {Box, Container, Divider, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

export const Features = ({ data }: { data: { icon: React.ReactNode; title: string; text: string }[] }) => {
    const theme = useTheme();

    return (
        <Container>
            <div className='col-md-10 col-md-offset-1 section-title'>
                <Typography variant='h2' sx={{ textTransform: 'uppercase', color: theme.palette.primary.main }}>
                    Features
                </Typography>
            </div>
            <Divider sx={{ backgroundColor: theme.palette.secondary.main, marginBottom: '20px' }} />
            <Grid container spacing={2}>
                {data
                    ? data.map((d, i) => (
                        <Grid key={`${d.title}-${i}`} item xs={12} sm={6} md={4} style={{marginBottom:"10px"}}>
                            <Box height="100%" display="flex" justifyContent="center" alignItems="stretch">
                                <Paper
                                    elevation={3}
                                    sx={{
                                        background: theme.palette.background.default,
                                        textAlign: 'center',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        height: '100%',
                                    }}
                                >
                                    <Avatar sx={{ width: 80, height: 80, backgroundColor: theme.palette.primary.main, fontSize: '2rem' }}>
                                        {d.icon}
                                    </Avatar>
                                    <Typography variant='h4' sx={{ fontWeight: 'bold', marginTop: '15px', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        {d.title}
                                    </Typography>
                                    <Typography variant='body1' sx={{ textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        {d.text}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    ))
                    : 'Loading...'}
            </Grid>
        </Container>
    );
};
