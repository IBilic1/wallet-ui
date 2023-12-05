import React from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";

const footerLinks = [
  {'name':"Pricing","url":"/pricing"},
  {'name':"About us","url":"/about"},
  {'name':"Contact","url":"/contact"}
]

export default function GreyFooter() {

  const navigate = useNavigate();

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #ddd',
    padding: '10px',
    zIndex: 1000,
    margin: 0,
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Adjust as needed
    marginRight: 'auto',
    flex: '1',
  };

  return (
      <Grid container sx={footerStyle}>
        <Container>
          <Stack direction="row" spacing={2}>
            <IconButton className="icon" sx={{ border: '1px solid darkgrey' }} onClick={() => navigate('/')}>
              <Facebook />
            </IconButton>
            <IconButton className="icon" sx={{ border: '1px solid darkgrey' }} onClick={() => navigate('/')}>
              <Instagram />
            </IconButton>
            <IconButton className="icon" sx={{ border: '1px solid darkgrey' }} onClick={() => navigate('/')}>
              <Twitter />
            </IconButton>
          </Stack>
        </Container>
        <Container sx={linkContainerStyle}>
          {footerLinks.map((setting, index) => (
              <Link
                  key={index}
                  href={setting.url}
                  className="footerLink"
                  sx={{ margin: '10px', textDecoration: 'none', color: 'inherit' }}
              >
                {setting.name}
              </Link>
          ))}
        </Container>
      </Grid>
  );
}
