import React from 'react';
import {Container, Typography, Button, Grid, Card, CardContent, Box, useTheme, Divider} from '@mui/material';
import ContactUs from '../FooterLinks/ContactUs';
import Avatar from "@mui/material/Avatar";
import TestimonialCard from "../Cards/TestimonialCard";
import ZvonimirPath from "../../assets/img/personas/Zvonimir.png";
import KristinaPath from "../../assets/img/personas/Kristina.png";
import LukaPath from "../../assets/img/personas/Luka.png";
import ZrinkaPath from "../../assets/img/personas/Zrinka.png";
import AnaPath from "../../assets/img/personas/Ana.png";
import {useNavigate} from "react-router-dom";
import {OneLinerVisual} from "./OneLinerVisual";
import {Features} from "./Features";
import {
    Money,
    Group,
    AccountBox,
    TrackChanges,
    PestControl,
    Savings,
    RemoveRedEye,
    Security
} from "@mui/icons-material";

const ProductPage = () => {

    const theme = useTheme()

    const featuresArray = [
        {
            "icon": <AccountBox />,
            "title": "Account Creation",
            "text": "The app will enable kids to create their own accounts, either independently or with parental supervision."
        },
        {
            "icon": <Money />,
            "title": "Money Management",
            "text": "Users will be able to add money to their virtual wallets, track their balance, and view transaction history. The app will support multiple currencies and provide a user-friendly interface for managing funds."
        },
        {
            "icon": <Savings />,
            "title": "Savings Goals",
            "text": "The app may include a feature that allows kids to set savings goals, such as saving for a specific toy or item. It can track progress toward these goals and provide incentives or rewards for achieving them."
        },
        {
            "icon": <TrackChanges />,
            "title": "Expense Tracking",
            "text": "Users will be able to record their expenses, categorize them, and monitor their spending habits. This feature can help kids develop good financial habits and learn about budgeting."
        },
        {
            "icon": <RemoveRedEye/>,
            "title": "Parental Controls",
            "text": "The app may offer parental controls or oversight features that allow parents to monitor their child's transactions, set spending limits, or provide allowances. These controls would ensure responsible use and enable parents to guide their child's financial education."
        },
        {
            "icon": <Security/>,
            "title": "Secure Environment",
            "text": "The app will prioritize the safety and security of children's financial information. Robust security measures will be implemented to protect user data and ensure a trustworthy platform for kids to manage their money."
        },
    ];


    // Sample customer testimonials
    const testimonials = [
        { name: 'Zvonimir', role: 'Guardian', quote: "I want to make sure my grandsons learn the value of money and develop good financial habits for their future.", imagePath: {ZvonimirPath}.ZvonimirPath },
        { name: 'Ana', role: 'Child', quote: 'I hope to inspire my friends to be more mindful about their money too. It\'s cool to learn these skills together.', imagePath: {AnaPath}.AnaPath },
        { name: 'Kristina', role: 'Guardian', quote: 'WALL-ET is a fantastic tool for instilling financial responsibility in kids.',  imagePath: {KristinaPath}.KristinaPath },
        { name: 'Zrinka', role: 'Guardian', quote: 'I love how the app makes learning about finances fun and interactive.',  imagePath: {ZrinkaPath}.ZrinkaPath },
        { name: 'Luka', role: 'Child', quote: 'WALL-ET has been a game-changer for my children\'s understanding of financial concepts.', imagePath: {LukaPath}.LukaPath },
    ];

    return (
        <Container style={{ textAlign: 'center', marginTop: '100px' }}>

            {/* Main product visual */}
            <OneLinerVisual/>

            {/* Key features */}
            <Features data={featuresArray}/>

            <Divider sx={{ backgroundColor: theme.palette.secondary.main, marginBottom: '20px' }} />

            <ContactUs />

            {/* Customer testimonials */}
            <Typography variant="h5" gutterBottom style={{ marginTop: '30px' }}>
                What Our Customers Say
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        quote={testimonial.quote}
                        role={testimonial.role}
                        imagePath={testimonial.imagePath}
                    />
                ))}
            </Grid>


        </Container>
    );
};

export default ProductPage;
