import React from "react";
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import GreyFooter from "../../components/Footer/GreyFooter";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from "../RegistrationPage/SignIn";
import SignUp from "../RegistrationPage/SignUp";
import { SnackbarProvider } from 'notistack'
import "../../assets/fonts/CustomFonts.css"
import createTypography from "@mui/material/styles/createTypography";
import createPalette from "@mui/material/styles/createPalette";
import Profile from "../ProfilePage/Profile";
import Background from "../../components/Background/Background";
import ContactUs from "../../components/FooterLinks/ContactUs";
import Pricing from "../../components/FooterLinks/Pricing";
import AboutUs from "../../components/FooterLinks/AboutUs";


// https://www.realtimecolors.com/?colors=25032b-fdf6fe-b454c6-edaaf9-2bc70f&fonts=Young%20Serif-Young%20Serif
const workTheme = createTheme({
  palette: {
    primary: {
      main: "#B454C6"
    },
    secondary: {
      main: "#EDAAF9"
    },
    background:{
      default: "#FDF6FE"
    }
  },
  typography: createTypography(createPalette({}),{
    fontFamily: '"Young Serif"',
    fontSize: 15
  })
});

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#F0576E"
    },
    secondary: {
      main: "#9852EC"
    },
    background:{
      default: "#FDF6FE"
    }

  },
  typography: createTypography(createPalette({}),{
      fontFamily: '"Gabriela"',
      fontSize: 15
  })
});

export function HomePage() {

  const appBarHeight = 64; // Replace with the actual height of your AppBar
  const footerHeight = 100; // Replace with the actual height of your AppBar

  const contentStyle = {
    marginTop: appBarHeight,
    paddingBottom: footerHeight,
  };

  return (
  <BrowserRouter>
        <ThemeProvider theme={workTheme}>
          <SnackbarProvider>
          <ResponsiveAppBar />
          <CssBaseline />
            <Background>
              <div style={contentStyle}>
                <Routes>
                  <Route path="/" element={<Navigate to="home"/>}/>
                  <Route path="home" element={<HomePageContent/>}/>
                  <Route path="sign-in" element={<SignIn/>}/>
                  <Route path="sign-up" element={<SignUp/>}/>
                  <Route path="profile" element={<Profile/>}/>
                  <Route path="contact" element={<ContactUs/>}/>
                  <Route path="pricing" element={<Pricing/>}/>
                  <Route path="about" element={<AboutUs/>}/>
                </Routes>
              </div>
            </Background>
          <GreyFooter />
          </SnackbarProvider>
      </ThemeProvider>
  </BrowserRouter>
  );
}
