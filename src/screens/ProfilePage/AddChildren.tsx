import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { useAddUserMutation } from '../../store/query/user.query'
import { useNavigate } from 'react-router-dom'

export type AddChildrenProps = {
  refetch: () => void
}

export default function AddChildren({ refetch }: AddChildrenProps) {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const [addUser, { isError }] = useAddUserMutation()
  const [role] = useState<'ADMIN' | 'USER'>('USER')
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const errors: any = {}
    if (!data.get('firstName')) {
      errors.firstName = 'First Name is required'
    }
    if (!data.get('lastName')) {
      errors.lastName = 'Last Name is required'
    }
    if (!data.get('email')) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(data.get('email') as string)) {
      errors.email = 'Invalid email address'
    }
    if (!data.get('password')) {
      errors.password = 'Password is required'
    }

    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      addUser({
        email: data.get('email') as string,
        password: data.get('password') as string,
        firstName: data.get('firstName') as string,
        lastName: data.get('lastName') as string,
        role,
      }).then(()=>{
        refetch()
        handleClose()
      })
    }
  }
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    if (isError) {
      enqueueSnackbar('Sign up failed!', { variant: 'error' })
    }
  }, [isError])

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        ADD CHILD
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add child</DialogTitle>
        <DialogContent>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                />
                <Typography variant='body2' color='error'
                            sx={{ paddingLeft: 2, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {formErrors.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
                <Typography variant='body2' color='error'
                            sx={{ paddingLeft: 2, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {formErrors.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
                <Typography variant='body2' color='error'
                            sx={{ paddingLeft: 2, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {formErrors.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Default password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
                <Typography variant='body2' color='error'
                            sx={{ paddingLeft: 2, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {formErrors.password}
                </Typography>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Add child
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}