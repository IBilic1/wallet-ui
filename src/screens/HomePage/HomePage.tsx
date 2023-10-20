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


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const HomePage = (): JSX.Element => {
  return (

      <ThemeProvider theme={defaultTheme}>
        {/*<MenuAppBar logoPath={logo} name="Wall-ET"/>*/}
        <ResponsiveAppBar logoPath={logo}/>
        <Container component="main" className="background">
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
                  <Button variant="contained">LOGIN</Button>
                  <Button variant="contained">REGISTER</Button>
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
