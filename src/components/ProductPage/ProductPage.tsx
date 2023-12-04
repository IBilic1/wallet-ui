import React from 'react';
import {Container, Typography, Button, Grid, Card, CardContent, Box} from '@mui/material';
import ContactUs from '../FooterLinks/ContactUs';
import Avatar from "@mui/material/Avatar";
import TestimonialCard from "../Cards/TestimonialCard";
import ZvonimirPath from "../../assets/img/personas/Zvonimir.png";
import KristinaPath from "../../assets/img/personas/Kristina.png";
import LukaPath from "../../assets/img/personas/Luka.png";
import ZrinkaPath from "../../assets/img/personas/Zrinka.png";
import AnaPath from "../../assets/img/personas/Ana.png";
import {useNavigate} from "react-router-dom";

const ProductPage = () => {

    const featuresArray = [
        {
            "icon": "fa fa-comments-o",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-bullhorn",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-group",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        },
        {
            "icon": "fa fa-magic",
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
        }
    ];


    // Sample customer testimonials
    const testimonials = [
        { name: 'Zvonimir', role: 'Guardian', quote: "I want to make sure my grandsons learn the value of money and develop good financial habits for their future.", imagePath: {ZvonimirPath}.ZvonimirPath },
        { name: 'Ana', role: 'Child', quote: 'I hope to inspire my friends to be more mindful about their money too. It\'s cool to learn these skills together.', imagePath: {AnaPath}.AnaPath },
        { name: 'Kristina', role: 'Guardian', quote: 'WALL-ET is a fantastic tool for instilling financial responsibility in kids.',  imagePath: {KristinaPath}.KristinaPath },
        { name: 'Zrinka', role: 'Guardian', quote: 'I love how the app makes learning about finances fun and interactive.',  imagePath: {ZrinkaPath}.ZrinkaPath },
        { name: 'Luka', role: 'Child', quote: 'WALL-ET has been a game-changer for my children\'s understanding of financial concepts.', imagePath: {LukaPath}.LukaPath },
    ];

    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/sign-in')
    }

    const gradiantBtnStyle = (color1 : string, color2 : string) => {
        return {
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
            color: 'white',
            padding: '10px 20px',
            margin: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
        };
    };

    return (
        <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '100px' }}>

            {/* Main product visual */}
            <Typography variant="h2" gutterBottom className="font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                Empower Your Child's Financial Future with {' '}
                <span
                    style={{
                        backgroundImage: 'linear-gradient(to right, #9852EC, #EDAAF9)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                  WALL-ET
                </span>
            </Typography>
            {/* Clear product description and value proposition */}
            <Typography variant="body1" paragraph>
                Introduce your child to financial responsibilities with our virtual wallet app. Set saving goals, track spending, and reward their progress in a secure and engaging environment.
            </Typography>

            <Button
                className="hover:shadow-md"
                style={gradiantBtnStyle('#B454C6', '#EDAAF9')}
                onClick={handleLoginClick}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')}
            >
                Get Started
            </Button>
            <Button
                className="hover:shadow-md"
                style={gradiantBtnStyle('#EDAAF9', '#B454C6')}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')}
            >
                Learn More
            </Button>

            {/* Key features */}
            <Typography variant="h5" gutterBottom>
                Key Features
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {/* Include the key features here using bullet points or any preferred format */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1">Virtual allowance management</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Repeat similar Card components for other key features */}
            </Grid>

            <ContactUs />

            {/* Customer testimonials */}
            <Typography variant="h5" gutterBottom style={{ marginTop: '30px' }}>
                What Our Customers Say
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard name={testimonial.name} quote={testimonial.quote} role={testimonial.role} imagePath={testimonial.imagePath}/>
                ))}
            </Grid>

        </Container>
    );
};

export default ProductPage;
