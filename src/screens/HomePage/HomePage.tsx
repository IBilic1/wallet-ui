import React from 'react'
import ResponsiveAppBar from '../../components/NavBar/ResponsiveAppBar'
import CssBaseline from '@mui/material/CssBaseline'
import './style.css'
import GreyFooter from '../../components/Footer/GreyFooter'
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

export function HomePage() {

  // Replace with the actual height of AppBar
  const footerHeight = 100 // Replace with the actual height of Footer

  const contentStyle = {}


  return (
    <BrowserRouter>
      <SnackbarProvider>
        <ResponsiveAppBar />
        <CssBaseline />
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
        <GreyFooter />
      </SnackbarProvider>
    </BrowserRouter>
  )
}
