import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import logo from '../../assets/img/logo.png'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'


const pages = [
    { 'name': 'Tasks', 'url': '/tasks' },
    { 'name': 'Store', 'url': '/shop' },
]

const settings = [
  { 'name': 'Profile', 'url': '/profile' },
  { 'name': 'Logout', 'url': '/home' },
]

function ResponsiveAppBar() {
  const navigate = useNavigate()

  const [auth] = React.useState(true)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleHomeClick = () => {
    navigate('/home')
  }

  const appBarStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000, // Adjust the z-index as needed
  }

  const handlePageClick = (pageUrl : string) => () => {
    navigate(pageUrl)
  }

  return (
    <AppBar position='static' sx={{ background: '#f8f8f8', ...appBarStyle }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Stack spacing={2} direction='row' alignItems={'center'} marginRight={'2vw'}>
            <Box
              component='img'
              sx={{
                height: '50px',
                width: 'auto',
                margin: '10px',
                display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
              alt='logo'
              src={logo}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontSize: 35,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#9852EC',
                textDecoration: 'none',
              }}
              onClick={handleHomeClick}
            >
              Wall-ET
            </Typography>
          </Stack>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='primary'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {localStorage.getItem('access_token') && pages.map((page) => (
                      <MenuItem key={page.name} onClick={handlePageClick(page.url)}>
                          <Typography textAlign='center'>{page.name}</Typography>
                      </MenuItem>
                  ))}
            </Menu>
          </Box>
          <Box
            component='img'
            sx={{ height: '50px', width: 'auto', margin: '10px', display: { xs: 'flex', md: 'none' }, mr: 1 }}
            alt='logo'
            src={logo}
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/home'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#9852EC',
              textDecoration: 'none',
            }}
          >
            Wall-ET
          </Typography>

          {localStorage.getItem('access_token') && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                    key={page.name}
                    onClick={handlePageClick(page.url)}
                    sx={{ my: 2, color: 'purple', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {localStorage.getItem('access_token') && (
              <div>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={
                      event => {
                        if (setting.name == 'Logout') {
                            localStorage.removeItem('access_token')
                        }
                        navigate(setting.url)
                      }
                    }>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar