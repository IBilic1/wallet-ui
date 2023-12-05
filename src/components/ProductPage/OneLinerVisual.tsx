import {Button, Container, Typography} from "@mui/material";
import React from "react";
import homePig from '../../assets/img/logo.png'
import {useNavigate} from "react-router-dom";
import {GradientButton} from "../Buttons/GradientButton";

export function OneLinerVisual(){

    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/sign-in')
    }

    const handleAboutClick = () => {
        navigate('/about')
    }

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

            <GradientButton color1={'#B454C6'} color2={'#EDAAF9'} onClick={handleLoginClick}>Get Started</GradientButton>
            <GradientButton color1={'#EDAAF9'} color2={'#B454C6'} onClick={handleAboutClick}>Learn about us</GradientButton>

            <img src={homePig} alt="placeholder" style={{ width: '100%', height: '50vh', objectFit: 'contain', marginBottom: "200px" }} />
        </Container>
    )
}