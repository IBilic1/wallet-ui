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


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#ff0072",
        },
        secondary: {
            main: "#4e1184",
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
        <Container component="main">
          <CssBaseline />

          <div className="home-page">
            <div className="overlap-group">
              <Background
                  className="background-instance"
                  footerDividerClassName="background-2"
                  footerFooterClassName="design-component-instance-node"
                  navbarDividerClassName="background-3"
              />
              <Stack spacing={2} direction="row">
                  <Button variant="contained" color={"primary"}>LOGIN</Button>
                  <Button variant="contained" color={"secondary"}>REGISTER</Button>
              </Stack>
              <img className="image" alt="Image" src={homePig} />
              <WelcomeComponent className="welcome-component-instance" />
            </div>
          </div>
          {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
        </Container>
      </ThemeProvider>
  );
};
