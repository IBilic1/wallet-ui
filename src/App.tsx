import React from "react";
import "./App.css";

import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const NavBar = () => {
  return (
    <Box
      sx={{
        minHeight: "50px",
        backgroundColor: "hotpink",
        border: "3px solid black"
      }}
    >
      NavBar
    </Box>
  );
};

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: "200px",
        backgroundColor: "lightgreen",
        border: "3px solid black"
      }}
    >
      Header
    </Box>
  );
};

const Content = () => {
  return (
    <Box
      sx={{
        minHeight: "250px",
        backgroundColor: "beige",
        border: "3px solid black"
      }}
    >
      Content
    </Box>
  );
};
const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: "300px",
        backgroundColor: "darkblue",
        color: "white",
        border: "3px solid black"
      }}
    >
      Footer
    </Box>
  );
};

function Layout(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {

  return (
    <>
      <CssBaseline />
      <NavBar></NavBar>
      <Container disableGutters maxWidth={false}>
        <main>
          <Header />
          {props.children}
          <Footer />
        </main>
      </Container>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Content />
        <Content />
        <Content />
      </Layout>
    </div>
  );
}