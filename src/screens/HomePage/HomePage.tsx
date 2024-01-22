import React from 'react'
import ResponsiveAppBar from '../../components/NavBar/ResponsiveAppBar'
import CssBaseline from '@mui/material/CssBaseline'
import './style.css'
import HomePageContent from '../../components/HomePageContent/HomePageContent'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../RegistrationPage/SignIn'
import SignUp from '../RegistrationPage/SignUp'
import { SnackbarProvider } from 'notistack'
import '../../assets/fonts/CustomFonts.css'
import Profile from '../ProfilePage/Profile'
import Background from '../../components/Background/Background'
import ContactUs from '../../components/FooterLinks/ContactUs'
import Pricing from '../../components/FooterLinks/Pricing'
import AboutUs from '../../components/FooterLinks/AboutUs'
import ProductPage from '../../components/ProductPage/ProductPage'
import Tasks from '../../components/Tasks/Tasks'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

export function HomePage() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <ResponsiveAppBar />
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Background>
            <Routes>
              <Route path='/' element={<Navigate to='home' />} />
              <Route path='home' element={<HomePageContent />} />
              <Route path='sign-in' element={<SignIn />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='profile' element={<Profile />} />
              <Route path='contact' element={<ContactUs />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='about' element={<AboutUs />} />
              <Route path='learn-more' element={<ProductPage />} />
              <Route path='tasks' element={<Tasks />} />
            </Routes>
          </Background>
        </LocalizationProvider>
      </SnackbarProvider>
    </BrowserRouter>
  )
}
