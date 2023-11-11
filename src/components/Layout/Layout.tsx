import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import logo from "../../assets/img/logo.png";
import HomePageContent from "../WelcomeComponent/HomePageContent";
import GreyFooter from "../Footer/GreyFooter";

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

export default function Layout(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <ResponsiveAppBar logoPath={logo}/>
                <CssBaseline />
                <main>
                    {props.children}
                </main>
                <HomePageContent/>
                <GreyFooter/>
            </ThemeProvider>
        </>
    );
}