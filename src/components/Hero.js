import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
  color: 'white',
  paddingTop: '64px',
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25),
  border: '5px solid white',
  marginBottom: theme.spacing(3),
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <ProfileAvatar
          alt="MAHAVEER SINGH"
          src="/images/profile.jpg"
          sx={{
            margin: '0 auto',
            marginBottom: 3,
          }}
        />
        <Typography variant="h2" component="h1" gutterBottom sx={{ textTransform: 'uppercase' }}>
          MAHAVEER SINGH
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textTransform: 'uppercase' }}>
          MERN STACK DEVELOPER
        </Typography>
        <Typography variant="h6">
          Passionate about creating innovative web solutions
        </Typography>
      </Container>
    </HeroSection>
  );
};

export default Hero; 