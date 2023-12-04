import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './screens/HomePage'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { store } from './store/store'
import { Provider } from 'react-redux'
import createTypography from "@mui/material/styles/createTypography";
import createPalette from "@mui/material/styles/createPalette";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

// https://www.realtimecolors.com/?colors=25032b-fdf6fe-b454c6-edaaf9-2bc70f&fonts=Young%20Serif-Young%20Serif
const workTheme = createTheme({
  palette: {
    primary: {
      main: "#B454C6"
    },
    secondary: {
      main: "#EDAAF9"
    },
    info:{
      main: "#C97DA2"
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

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={workTheme}>
        <HomePage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
