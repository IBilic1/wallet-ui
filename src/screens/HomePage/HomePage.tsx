import React from "react";
import { AppNameButton } from "../../components/AppNameButton";
import { Background } from "../../components/Background";
import { WelcomeComponent } from "../../components/WelcomeComponent";
import homePig from "../../assets/img/homePig.png";
import logo from "../../assets/img/logo.png"
import ResponsiveAppBar from "../../components/NavBar/ResponsiveAppBar";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import "./style.css";
import MenuAppBar from "../../components/NavBar/MenuAppBar";
import {amber, deepOrange, grey} from "@mui/material/colors";
import {PaletteMode} from "@mui/material";
import {Footer} from "../../components/Footer";
import ResponsiveFooter from "../../components/Footer/ResponsiveFooter";
import GreyFooter from "../../components/Footer/GreyFooter";
import HomePageContent from "../../components/WelcomeComponent/HomePageContent";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#F0576E",
        },
        secondary: {
            main: "#9852EC",
        },
    },
});

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

export const HomePage = (): JSX.Element => {
  return (

      <ThemeProvider theme={customTheme}>
        {/*<MenuAppBar logoPath={logo} name="Wall-ET"/>*/}
        <ResponsiveAppBar logoPath={logo}/>
          <CssBaseline />
          <HomePageContent/>
        {/*<Container component="main">*/}
        {/*  */}

        {/*  <div className="home-page">*/}
        {/*    <div className="overlap-group">*/}
        {/*      <Stack spacing={2} direction="row">*/}
        {/*          <Button variant="contained" color={"primary"}>LOGIN</Button>*/}
        {/*          <Button variant="contained" color={"secondary"}>REGISTER</Button>*/}
        {/*      </Stack>*/}
        {/*      <img className="image" alt="Image" src={homePig} />*/}
        {/*      <WelcomeComponent className="welcome-component-instance" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}
        {/*<Footer className={"design-component-instance-node"} dividerClassName={"background-2"}/>*/}
        {/*<ResponsiveFooter/>*/}
        <GreyFooter/>
      </ThemeProvider>
  );
};
