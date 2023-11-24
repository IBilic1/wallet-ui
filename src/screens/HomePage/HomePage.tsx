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

export const HomePage = (): JSX.Element => {
  return (
  <BrowserRouter>
        <ThemeProvider theme={workTheme}>
          <SnackbarProvider>
          <ResponsiveAppBar />
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route path="home" element={<HomePageContent/>}/>
            <Route path="sign-in" element={<SignIn/>}/>
            <Route path="sign-up" element={<SignUp/>}/>
          </Routes>
          <GreyFooter />
          </SnackbarProvider>
      </ThemeProvider>
  </BrowserRouter>
  );
};
