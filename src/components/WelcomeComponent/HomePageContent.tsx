import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import homePig from "../../assets/img/homePig.png";
import React from "react";
import {createRoot} from "react-dom/client";
import {HomePage} from "../../screens/HomePage";
import SignIn from "../../screens/RegistrationPage/SignIn";
import SignUp from "../../screens/RegistrationPage/SignUp";
import Layout from "../Layout/Layout";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#F0576E",
        },
        secondary: {
            main: "#9852EC",
        },
    },
});

const HomePageContent = () => {
    const handleLoginClick = () => {
        const root = createRoot(document.getElementById('content') as HTMLElement);
        root.render(
            <ThemeProvider theme={customTheme}>
                <SignIn />
            </ThemeProvider>
        );
    };

    const handleRegisterClick = () => {
        const root = createRoot(document.getElementById('content') as HTMLElement);
        root.render(
            <ThemeProvider theme={customTheme}>
                <SignUp />
            </ThemeProvider>
        );
    };

    return (
        <Grid container spacing={2} id="content">
            {/* Left Side */}
            <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Typography variant="h2" gutterBottom sx={{ fontWeight: '400', fontFamily: 'Poppins' }}>
                        Welcome!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Wall-ET is an app for educating children on the use of money
                    </Typography>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }} onClick={handleLoginClick}>
                            LOGIN
                        </Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={handleRegisterClick}>
                            REGISTER
                        </Button>
                    </div>
                </div>
            </Grid>
            {/* Right Side */}
            <Grid item xs={12} sm={6}>
                <img src={homePig} alt="placeholder" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            </Grid>
        </Grid>
    );
};

export default HomePageContent;