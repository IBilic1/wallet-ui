import React from "react";
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import GreyFooter from "../../components/Footer/GreyFooter";
import HomePageContent from "../../components/WelcomeComponent/HomePageContent";

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

    <ThemeProvider theme={customTheme}>
      <ResponsiveAppBar />
      <CssBaseline />
      <HomePageContent />
      <GreyFooter />
    </ThemeProvider>
  );
};
