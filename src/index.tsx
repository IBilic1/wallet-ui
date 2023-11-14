import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HomePage} from "./screens/HomePage";
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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

root.render(
  <React.StrictMode>
    {/*<App />*/}
      <ThemeProvider theme={customTheme}>
          <HomePage/>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
