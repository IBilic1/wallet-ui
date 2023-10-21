import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import homePig from "../../assets/img/homePig.png";
import React from "react";

const HomePageContent = () => {
    return (
        <Grid container spacing={2}>
            {/* Left Side */}
            <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', padding:"100px" }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <Typography variant="h2" gutterBottom sx={{fontWeight:"400",fontFamily: "Poppins"}}>Welcome!</Typography>
                    <Typography variant="body1" gutterBottom>Wall-ET is an app for educating children on the use of money</Typography>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>LOGIN</Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>REGISTER</Button>
                    </div>
                </div>
            </Grid>
            {/* Right Side */}
            <Grid item xs={12} sm={6}>
                <img src={homePig} alt="placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Grid>
        </Grid>
    );
};

export default HomePageContent;