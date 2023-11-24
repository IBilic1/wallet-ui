import React from "react";
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import GreyFooter from "../../components/Footer/GreyFooter";
import HomePageContent from "../../components/WelcomeComponent/HomePageContent";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from "../RegistrationPage/SignIn";
import SignUp from "../RegistrationPage/SignUp";
import { SnackbarProvider } from 'notistack'

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#F0576E"
    },
    secondary: {
      main: "#9852EC"
    }
  }
});

export const HomePage = (): JSX.Element => {
  return (
  <BrowserRouter>
        <ThemeProvider theme={customTheme}>
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
