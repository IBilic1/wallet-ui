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
import { createRoot } from 'react-dom/client'
import HomePageContent from '../WelcomeComponent/HomePageContent'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const pages = ['Tasks', 'History', 'Store', 'Group']
const settings = ['Profile', 'Logout']

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

function ResponsiveAppBar() {
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
    const root = createRoot(document.getElementById('content') as HTMLElement)
    root.render(
      <ThemeProvider theme={customTheme}>
        <HomePageContent />
      </ThemeProvider>,
    )
  }

  return (
    <AppBar position='static' sx={{ background: '#f8f8f8' }}>
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
                fontFamily: 'monospace',
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
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
            href='#app-bar-with-responsive-menu'
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

          {auth && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'purple', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {auth && (
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
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