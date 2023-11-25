import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
                return '#C8E6C9'; // Light green
            case 'PREMIUM':
                return '#BBDEFB'; // Light blue
            case 'FAMILY PACKAGE MODEL':
                return '#FFF9C4'; // Light yellow
            default:
                return '#FFFFFF'; // White
        }
    };

    return (
        <Grid container spacing={4} padding="1em">
            {pricingStrategies.map((strategy) => (
                <Grid item key={strategy.type} xs={12} md={4}>
                    <Paper elevation={3} style={{ backgroundColor: getBoxColor({type: strategy.type}), marginLeft:'1em',marginRight:'1em', padding: '1rem', height: '100%' }}>
                        <Typography variant="h5" fontWeight="bold" marginBottom="1rem">
                            {strategy.type}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Features:</strong>
                        </Typography>
                        <ul>
                            {strategy.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
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
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default Pricing;
