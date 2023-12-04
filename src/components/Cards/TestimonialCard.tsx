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
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: theme.palette.background.default}}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="center" marginBottom="15px">
                        <Avatar sx={{ width: 80, height: 80 }} alt={name} src={imagePath} />
                    </Box>
                    <Typography variant="subtitle2" style={{ marginTop: '15px' }}>{name}</Typography>
                    <hr />
                    {role && (
                        <Box marginY="15px">
                            <Typography variant="caption" color="textSecondary">{role}</Typography>
                        </Box>
                    )}
                    <Typography variant="body1">{quote}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TestimonialCard;
