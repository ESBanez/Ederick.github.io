import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import React from "react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import "../sass/UniversalBackground.scss";
import "../sass/Navbar.scss";
import '../JS/navbar.js';



const CustomTypography = styled(Typography)`
  font-family: Roboto, sans-serif;
  text-decoration: none; /* Add this line to remove the underline */
`;


const pages = [
  { name: 'Home', id: 1, path: "/" },
  { name: 'Products', id: 2, path: "/products" },
  { name: 'Pricing', id: 3, path: "/pricing" },
  { name: 'Blog', id: 4, path: "/blog" },
];

const settings = [
{ name: 'My Team', id: 1, path: "/My-team" },
{ name: 'Curriculum-vitae', id: 2, path: "/curriculum-vitae" },
{ name: 'Projects', id: 3, path: "/projects" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="container-fluid" style={{ backgroundColor: "#040D12", marginTop: "2rem"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div>
              <img src="rmbg-logo.png" height="100rem"/>
          </div>

          <Box sx={{ flexGrow: 4  , display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ backgroundColor: "#00FFA1" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                display: { xs: 'block', md: 'none'}, fontFamily:"Roboto Condensed', sans-serif" 
              }}
            >
              {pages.map((page) => (
                <Link to={page.path} key={page.id} style={{ textDecoration: 'none'}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <CustomTypography textAlign="center">{page.name}</CustomTypography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <CustomTypography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto Condensed',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#00FFA1',
              textDecoration: 'none',
            }}
          >
            LOGO
          </CustomTypography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.path} key={page.id} style={{ textDecoration: 'none'}}>
                <Button 
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:"#00FFA1", display: 'block' }}
                  className="buttones"
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My experiences">
              <IconButton onClick={handleOpenUserMenu} sx={{ pt: 5, color: '#00FFA1' }}>
                <FontAwesomeIcon icon={faUserNinja}
                className="ninjalogodesign"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (

                <Link to={setting.path} key={setting.id} style={{ textDecoration: 'none'}} >
            
                  <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                    <CustomTypography textAlign="center" style={{ color: 'black' }}>{setting.name}</CustomTypography>
                  </MenuItem>

                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}




export default Navbar;


