import React from "react";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";
import "./greyFooter.css";
import Grid from "@mui/material/Grid";

export default function GreyFooter() {

  return (
    <Grid container spacing={3} className="footer" sx={{ bottom: "0"}}>
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
        <Link href="#" className="footerLink" sx={{ margin: "10px", textDecoration: "none" }}>
          Terms
        </Link>
        <Link href="#" className="footerLink" sx={{ margin: "10px", textDecoration: "none" }}>
          Privacy
        </Link>
        <Link href="#" className="footerLink" sx={{ margin: "10px", textDecoration: "none" }}>
          Cookies
        </Link>
      </Container>
    </Grid>
  );
}
