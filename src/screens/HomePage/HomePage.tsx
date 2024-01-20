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
import ProductPage from "../../components/ProductPage/ProductPage";
import GuardianAssignTaskPage, {generateTaskGuardianView} from "../TaskPage/GuardianAssignTaskPage";

export function HomePage() {

  const appBarHeight = 64; // Replace with the actual height of AppBar
  const footerHeight = 100; // Replace with the actual height of Footer

  const contentStyle = {
    marginTop: appBarHeight,
    paddingBottom: footerHeight,
  };

  const taskGuardianView = generateTaskGuardianView()



  return (
  <BrowserRouter>
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
            <Route path="learn-more" element={<ProductPage/>}/>
            <Route path="assign-task" element=
                {<GuardianAssignTaskPage
                assignTaskToChild={taskGuardianView.assignTaskToChild}
                guardian={taskGuardianView.guardian}
                dropdownChildren={taskGuardianView.dropdownChildren}
                listOfAllTasks={taskGuardianView.listOfAllTasks}
                />}
            />
          </Routes>
        </div>
      </Background>
    <GreyFooter />
    </SnackbarProvider>
  </BrowserRouter>
  );
}
