import React from 'react'
import { Avatar, Box, Container, Grid, Paper, styled, Typography } from '@mui/material'
import BasicPie from '../../components/Chart'
import { useGetChildrenQuery, useGetUserQuery } from '../../store/query/user.query'
import AddChildren from './AddChildren'
// @ts-ignore
import AvatarGenerator from 'react-avatar-generator'

const ProfileBox = styled(Box)`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 15px;
`

export default function Profile() {
  const { data } = useGetUserQuery()
  const { data: children, refetch } = useGetChildrenQuery()

  return (
    <Container maxWidth='md'>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '100px', color: 'black' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'rows',
          alignItems: 'flex-start',
          gap: '20px',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}>
                <Avatar
                  alt='User Avatar'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymos5w_HKm-HZDozjtrO1PBJ42oX8ULFwXg&usqp=CAU'
                  sx={{ width: 200, height: 200 }}
                />
                <ProfileBox>
                  <Typography variant='h4'>{data?.firstName} {data?.lastName}</Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    {data?.email}
                  </Typography>
                </ProfileBox>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ marginTop: '20px' }}>
                <AddChildren refetch={refetch}/>
                <Typography variant='h6' gutterBottom>
                  Group Members
                </Typography>
                <Grid container spacing={2}>
                  {children?.map((member) => (
                    <Grid item key={member.id}>
                      <div
                        style={{
                          width: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:'center',
                          height: '50px',
                          borderRadius: '50%', // Make it circular by setting border-radius to 50%
                          overflow: 'hidden', // Ensure content inside stays within the circular boundary
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <AvatarGenerator
                          colors={['#F6A21E', '#DA70D6', '#6495ED']}
                          width={50}
                          height={50}
                          backgroundColor='#FFFFFF'
                          shape='circle'
                        />
                      </div>
                      <Typography variant='caption'>{member?.firstName} {member?.lastName}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', marginBottom: '20px', color: 'black' }}>
        <Typography variant='h4'>Expences in your family:</Typography>
        <Box sx={{
          marginTop: '20px',
        }}>
          <BasicPie />
        </Box>
      </Paper>
    </Container>
  )
}

