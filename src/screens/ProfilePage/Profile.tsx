import React from 'react'
import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material'
import BasicPie from '../../components/Chart'

const ProfilePage = () => {
  // Dummy data for demonstration purposes
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    group: 'Web Developers',
    guardianName: 'Jane Doe',
    members: [
      {
        id: 1,
        name: 'Member 1',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU',
      },
      {
        id: 2,
        name: 'Member 2',
        avatar: 'https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_woman_people_girl_glasses_icon_159125.png',
      },
      {
        id: 3,
        name: 'Member 3',
        avatar: 'https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&quality=89&ssl=1',
      },
    ],
  }

  return (
    <Container maxWidth='md'>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '120px', color: 'black' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'rows',
          alignItems: 'flex-start',
          gap: '20px',

        }}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
              }}
            >
              <Avatar alt='User Avatar'
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymos5w_HKm-HZDozjtrO1PBJ42oX8ULFwXg&usqp=CAU'
                      sx={{ width: 100, height: 100 }} />
              <Typography variant='h4'>{profileData.name}</Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {profileData.email}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Group: {profileData.group}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Guardian: {profileData.guardianName}
              </Typography>
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              <Typography variant='h6' gutterBottom>
                Group Members
              </Typography>
              <Grid container spacing={2}>
                {profileData.members.map((member) => (
                  <Grid item key={member.id}>
                    <Avatar alt={member.name} src={member.avatar} sx={{ width: 50, height: 50 }} />
                    <Typography variant='caption'>{member.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px',marginBottom: '120px', color: 'black' }}>
        <Typography variant='h4'>Expences:</Typography>
        <Box sx={{
          marginTop: '20px',
        }}>
          <BasicPie />
        </Box>
      </Paper>
    </Container>
  )
}

export default ProfilePage


