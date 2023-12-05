import {Button, Container, Typography} from "@mui/material";
import React from "react";
import homePig from '../../assets/img/logo.png'
import {useNavigate} from "react-router-dom";

export function OneLinerVisual(){

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
        <Container>
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
            <img src={homePig} alt="placeholder" style={{ width: '100%', height: '50vh', objectFit: 'contain', marginBottom: "200px" }} />
        </Container>
    )
}