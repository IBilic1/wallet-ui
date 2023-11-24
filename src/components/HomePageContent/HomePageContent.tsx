import React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import homePig from '../../assets/img/homePig.jpg'
import { useNavigate } from 'react-router-dom'


export default function HomePageContent() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/sign-in')
  }

  const handleRegisterClick = () => {
    navigate('/sign-up')
  }

  return (
    <Grid container spacing={2} id='content'>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <Typography variant='h2' gutterBottom sx={{ fontWeight: '400', fontSize: '40px', }}>
            Welcome!
          </Typography>
          <Typography variant='body1' gutterBottom sx={{ fontSize: '20px' }}>
            Wall-ET is an app for educating children on the use of money.
          </Typography>
          <div style={{ display: 'flex', marginTop: 20 }}>
            <Button variant='contained' color='primary' style={{ marginRight: 10 }} onClick={handleLoginClick}>
              LOGIN
            </Button>
            <Button variant='contained' color='secondary' style={{ marginLeft: 10 }} onClick={handleRegisterClick}>
              REGISTER
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} >
        <img src={homePig} alt='placeholder' style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
      </Grid>
    </Grid>
  )
}