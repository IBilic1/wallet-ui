import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './screens/HomePage'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#F0576E',
    },
    secondary: {
      main: '#9852EC',
    },
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <HomePage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
