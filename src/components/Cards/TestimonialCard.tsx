import React, {useEffect, useState} from 'react';
import {Grid, Card, CardContent, Box, Avatar, Typography, useTheme, Palette} from '@mui/material';

interface TestimonialCardProps {
    name: string;
    quote: string;
    role: string;
    imagePath: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, role, imagePath }) => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4} style={{ height: '100%', marginBottom: '10px' }}>
            <Card style={{ backgroundColor: theme.palette.background.default, height: '100%'}}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ width: 80, height: 80 }} alt={name} src={imagePath} />
                    </Box>
                    <Typography variant="subtitle2" style={{ marginTop: '15px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {name}
                    </Typography>
                    <hr />
                    {role && (
                        <Box marginY="15px">
                            <Typography variant="caption" color="textSecondary">
                                {role}
                            </Typography>
                        </Box>
                    )}
                    <Typography variant="body1" sx={{ maxHeight: '80px', overflowY: 'hidden', textOverflow: 'ellipsis' }}>
                        {quote}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};





export default TestimonialCard;
