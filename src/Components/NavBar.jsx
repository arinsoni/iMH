import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from "../static/images/logo.png"

const NavigationMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = ['Capabilities', 'Work', 'Initiatives', 'About'];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center', padding: '0 10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: 10 }}>
            <img src={Logo} alt="Logo" style={{ maxWidth: '50px' }} />
          </Box>

         
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-around',
            backgroundColor: 'rgba(136, 136, 136, 0.3)',

            padding: '6px 0',
            borderRadius: '20px',
            width: { md: '50%', lg: '25%' },
            margin: 'auto',
          }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}
                endIcon={item === 'About' ? <ArrowDropDownIcon /> : null}
                onClick={item === 'About' ? handleMenuClick : null}
              >
                {item}
              </Button>
            ))}

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Our Team</MenuItem>
              <MenuItem onClick={handleMenuClose}>Our History</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
            </Menu>
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: '10px',
              backgroundColor: '#cfcfcf',
              textTransform: 'none',
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              right: 10,
              color: 'black',
              '&:hover': {
                backgroundColor: '#a0a0a0', 
              },
            }}
          >
            <Box sx={{
              width: '20px',
              height: '20px',
              backgroundColor: 'black',
              borderRadius: ' 50%',
              marginRight: '5px'
            }}>

            </Box>
            Book a call
          </Button>

          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
            sx={{ display: { xs: 'flex', md: 'none' }, position: 'absolute', right: 10 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileMenuOpen} onClose={handleMobileMenuClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleMobileMenuClose}
          onKeyDown={handleMobileMenuClose}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>{item}</MenuItem>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationMenu
