import React from 'react';
import {Box, Container} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";
import Link from "@mui/material/Link";
import './greyFooter.css';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const GreyFooter = () => {
    const handleFacebookClick = () => {
        // Handle the Facebook click event
    };

    const handleTwitterClick = () => {
        // Handle the Twitter click event
    };

    const handleInstagramClick = () => {
        // Handle the Instagram click event
    };

    return (
        <Grid container spacing={3} className="footer">
            <Container>
                <IconButton className="icon" onClick={handleFacebookClick} sx={{border: "1px solid darkgrey", margin: "5px"}}>
                    <Facebook />
                </IconButton>
                <IconButton className="icon" onClick={handleInstagramClick} sx={{border: "1px solid darkgrey", margin: "5px"}}>
                    <Instagram />
                </IconButton>
                <IconButton className="icon" onClick={handleTwitterClick} sx={{border: "1px solid darkgrey", margin: "5px"}}>
                    <Twitter />
                </IconButton>
            </Container>
            {/*<Box component={"div"} >*/}
            {/*    <Typography variant="body2" color="text.secondary" align="center">*/}
            {/*        {"Copyright © "}*/}
            {/*        <Link color="inherit" href="#">*/}
            {/*            Wall-ET*/}
            {/*        </Link>{" "}*/}
            {/*        {new Date().getFullYear()}*/}
            {/*        {"."}*/}
            {/*    </Typography>*/}
            {/*</Box>*/}
            <Container component={"div"} className="linkContainer" sx={{display: "flex", marginRight: "auto", flex: "1"}}>
                <Link href="#" className="footerLink" sx={{margin:"10px",textDecoration: 'none',}}>
                    Terms
                </Link>
                <Link href="#" className="footerLink" sx={{margin:"10px",textDecoration: 'none',}}>
                    Privacy
                </Link>
                <Link href="#" className="footerLink" sx={{margin:"10px",textDecoration: 'none',}}>
                    Cookies
                </Link>
            </Container>
        </Grid>
    );
};

export default GreyFooter;
