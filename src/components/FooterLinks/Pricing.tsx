import React, {SetStateAction, useState} from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Divider, useTheme} from "@mui/material";
import {GradientButton} from "../Buttons/GradientButton";

const pricingStrategies = [
    {
        type: 'FREEMIUM',
        features: [
            'Choosing an avatar from premade templates.',
            'Allowance management for 2 parents/guardians and 2 children.',
            'Earnings tracker divided into max 3 categories.',
            'Savings tracker divided into max 3 categories.',
            'Spending tracker is divided into max 3 categories.',
            'Reports on savings and spending.',
            'Chores divided into max 3 categories.',
        ],
        users: 'Maximum 4',
        lengthOfSubscription: '/',
        price: 'Free of charge',
    },
    {
        type: 'PREMIUM',
        features: [
            'Creating own avatar from scratch.',
            'Allowance management.',
            'Earnings tracker.',
            'Savings tracker.',
            'Spending tracker.',
            'Reports on spending and savings divided into categories.',
            'Chores divided into.',
            'Calendar for planning chores.',
            'Goal setting for savings, chores, and earnings.',
        ],
        users: "/",
        lengthOfSubscription: 'Renewed monthly',
        price: 'Price between $5-$15, $15-$30, $30-$100',
    },
    {
        type: 'FAMILY PACKAGE MODEL',
        features: [
            'Creating own avatar from scratch.',
            'Allowance management for up to 20 users.',
            'Savings tracker divided into unlimited number of categories.',
            'Unlimited number of categories for tracking spending.',
            'Reports on spending and savings divided into categories.',
            'Unlimited number of chores.',
            'Reports on spending and savings divided into categories.',
            'Calendar for planning chores.',
            'Goal setting for savings, chores, and earnings.',
        ],
        users: 'Maximum 20',
        lengthOfSubscription: 'Annual subscription period',
        price: 'Depending on the number of users',
    },
];

const Pricing = () => {
    const getBoxColor = ({type}: { type: any }) => {
        switch (type) {
            case 'FREEMIUM':
                // return '#C8E6C9'; // Light green
                return theme.palette.background.default; // Light green
            case 'PREMIUM':
                // return '#BBDEFB'; // Light blue
                return theme.palette.background.default; // Light blue
            case 'FAMILY PACKAGE MODEL':
                // return '#FFF9C4'; // Light yellow
                return theme.palette.background.default; // Light yellow
            default:
                return '#FFFFFF'; // White
        }
    };

    // State to track the "Popular" pricing strategy
    const [selectedIndex, setSelectedIndex] = useState(Math.floor(Math.random() * pricingStrategies.length));

    // Function to handle hover effect
    const handleHover = (index: number | SetStateAction<number>) => {
        setSelectedIndex(index);
    };

    const theme = useTheme();

    return (
        <Grid container spacing={4} padding="2em">
            {pricingStrategies.map((strategy, index) => (
                <Grid
                    item
                    key={strategy.type}
                    xs={12}
                    md={4}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(-1)}
                >
                    <Paper
                        elevation={3}
                        style={{
                            backgroundColor: getBoxColor({ type: strategy.type }),
                            marginLeft: '1em',
                            marginRight: '1em',
                            padding: '1rem',
                            height: '100%',
                            // height: index === selectedIndex ? '110%' : '100%', // Taller for the "Popular" pricing
                            transition: 'transform 0.3s ease', // Add smooth transition for transform
                            transform: index === selectedIndex ? 'scale(1.05)' : 'scale(1)', // Scale on hover
                            transformOrigin: 'center', // Set the transform origin to the center
                        }}
                    >
                        {index===1 && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: "0",
                                    backgroundColor: theme.palette.primary.main,
                                    padding: '0.3rem',
                                    borderRadius: '0.3rem',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1.4rem', // Increase font size
                                    transform: index === selectedIndex ? 'rotate(380deg)' : 'rotate(20deg)', // Rotate on hover,
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                Popular
                            </div>
                        )}
                        <Typography variant="h5" fontWeight="bold" marginBottom="1rem" style={{textAlign: "center"}}>
                            {strategy.type}
                        </Typography>
                        <Divider sx={{ backgroundColor: theme.palette.info.main, marginBottom: '20px' }} />
                        <Typography variant="body1" gutterBottom>
                            <strong>Features:</strong>
                        </Typography>
                        <ul>
                            {strategy.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <Divider sx={{ backgroundColor: theme.palette.info.main, marginBottom: '20px' }} />
                        <Typography variant="body1" gutterBottom>
                            <strong>Users:</strong> {strategy.users}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Length of Subscription:</strong> {strategy.lengthOfSubscription}
                        </Typography>
                        {strategy.price && (
                            <Typography variant="body1" gutterBottom>
                                <strong>Price:</strong> {strategy.price}
                            </Typography>
                        )}
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", top: '1rem'}}>
                            <GradientButton color1={theme.palette.secondary.main} color2={theme.palette.secondary.main} onClick={()=>{}}>Get started now</GradientButton>
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default Pricing;
