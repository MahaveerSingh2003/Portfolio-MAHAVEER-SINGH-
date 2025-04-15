import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(25, 118, 210, 0.9)', // Semi-transparent blue
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.drawer + 1,
  '&.scrolled': {
    backgroundColor: 'rgba(25, 118, 210, 0.95)', // Slightly more opaque when scrolled
    boxShadow: theme.shadows[4],
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
}));

const ProfileIcon = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  marginRight: theme.spacing(2),
  border: '2px solid white',
}));

const MobileProfileIcon = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  border: '2px solid white',
}));

const menuItems = ['Home', 'Skills', 'Projects', 'Education', 'Contact'];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item} 
          onClick={() => scrollToSection(item.toLowerCase())}
        >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <ProfileIcon
              alt="MAHAVEER SINGH"
              src="/images/profile.jpg"
            />
            <Typography variant="h6" component="div">
              MAHAVEER SINGH
            </Typography>
          </Box>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MobileProfileIcon
                alt="MAHAVEER SINGH"
                src="/images/profile.jpg"
              />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <NavButton
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </NavButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Header; 