import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Divider} from "@mui/material";

const contactItems = [
    {
        id: 1,
        icon: <EmailIcon />,
        name: 'Email',
        description: 'Drop us an email',
        value: 'contact@algebra.hr',
    },
    {
        id: 2,
        icon: <PhoneIcon />,
        name: 'Phone',
        description: 'Give us a call',
        value: '+385 234 555 890',
    },
    {
        id: 3,
        icon: <LocationOnIcon />,
        name: 'Office',
        description: 'Visit our office',
        value: 'Algebra, Gradišćanska 24, 10000 Zagreb',
    },
];

const ContactUs = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" >
            <Divider orientation="horizontal" flexItem/>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h3" fontWeight="bold" marginY="2rem">
                    Contact Us
                </Typography>
            </Grid>

            {contactItems.map((item) => (
                <Grid item key={item.id} xs={12} md={4} textAlign="center" marginBottom="2rem">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>{item.icon}</Grid>
                        <Grid item>
                            <Typography variant="h6" fontWeight="bold">
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{item.description}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{item.value}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default ContactUs;