import React from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import "./greyFooter.css";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";

const footerLinks = [
  {'name':"Pricing","url":"/pricing"},
  {'name':"About us","url":"/about"},
  {'name':"Contact","url":"/contact"}
]

export default function GreyFooter() {

  const navigate = useNavigate()

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    backgroundColor: '#f8f8f8', // Set your desired background color
    borderTop: '1px solid #ddd', // Add a border if needed
    padding: '10px', // Adjust the padding as needed
    zIndex: 1000, // Adjust the z-index as needed
    margin:0
  };

  return (
    <Grid container spacing={3} className="footer" sx={footerStyle}>
      <Container>
        <IconButton className="icon" sx={{ border: "1px solid darkgrey", margin: "5px" }}>
          <Facebook />
        </IconButton>
        <IconButton className="icon" sx={{ border: "1px solid darkgrey", margin: "5px" }}>
          <Instagram />
        </IconButton>
        <IconButton className="icon" sx={{ border: "1px solid darkgrey", margin: "5px" }}>
          <Twitter />
        </IconButton>
      </Container>
      <Container component={"div"} className="linkContainer" sx={{ display: "flex", marginRight: "auto", flex: "1" }}>
        {footerLinks.map((setting) => (
              <Link href={setting.url} className="footerLink" sx={{ margin: "10px", textDecoration: "none" }}>
                {setting.name}
              </Link>
        ))}
      </Container>
    </Grid>
  );
}
