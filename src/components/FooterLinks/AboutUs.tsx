import React from 'react';
import logo from "../../assets/img/logo.png";
import Grid from "@mui/material/Grid";

const AboutUs = () => {
    return (
        <div style={{padding:"1em"}}>
            <h3 style={{ fontWeight: 'bold' }}>About Us</h3>
            <p>
                The purpose of the project is to create a virtual wallet app that empowers children to learn, practice, and develop essential financial management skills in a supportive and enjoyable manner. The purpose of this project is to develop a virtual wallet app specifically tailored for children aged 8 to 12 years old. The app aims to provide a safe and secure environment where kids can learn and practice financial management skills. By offering features such as setting savings goals, tracking spending, and earning rewards, the app aims to promote financial responsibility and literacy among young users.
            </p>
            <Grid style={{height: '100%', padding:"0.5em"}}>
                <img src={logo} alt='placeholder' style={{ width: '100%', height: '50vh', objectFit: 'contain' }} />
            </Grid>
        </div>
    );
};

export default AboutUs;
