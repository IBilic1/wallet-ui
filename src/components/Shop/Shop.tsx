import * as React from 'react';
import {Box, Grid, styled, Typography} from '@mui/material';
import ShopCard from './ShopCard';
import {ShopItems} from "./ShopItems";

const ShopBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 100px;
    gap: 16px;
    padding-bottom: 100px;
    justify-content: center;
`;

export default function Shop() {
    return (
        <ShopBox>
            <h2>Shop</h2>
            <Typography variant={"subtitle1"}>
                Upon successfully completing a task, revel in the satisfaction of your achievement and choose a delightful reward to request from your parents. Bask in the joy of your accomplishments and treat yourself to a well-deserved token of appreciation.
            </Typography>
            <Grid container spacing={3} padding={2}>
                {ShopItems.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={2}>
                        <ShopCard title={item.title} description={item.description} image={item.image} />
                    </Grid>
                ))}
            </Grid>
        </ShopBox>
    );
}
