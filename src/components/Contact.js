import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Paper } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub, LocationOn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
  position: 'relative',
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: '50%',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiIconButton-root': {
    margin: theme.spacing(0, 1),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(1.5),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-2px)',
    },
  },
}));

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            mb: 6,
            color: 'text.primary',
            fontWeight: 'bold',
          }}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard elevation={2}>
              <IconContainer>
                <Email fontSize="large" />
              </IconContainer>
              <Typography variant="h6" gutterBottom color="primary">
                Email
              </Typography>
              <Typography align="center" color="text.secondary">
                mahaveersingh99297409@gmail.com
              </Typography>
            </ContactCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard elevation={2}>
              <IconContainer>
                <Phone fontSize="large" />
              </IconContainer>
              <Typography variant="h6" gutterBottom color="primary">
                Phone
              </Typography>
              <Typography color="text.secondary">
                +91-6378271484
              </Typography>
            </ContactCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard elevation={2}>
              <IconContainer>
                <LocationOn fontSize="large" />
              </IconContainer>
              <Typography variant="h6" gutterBottom color="primary">
                Location
              </Typography>
              <Typography color="text.secondary">
                Sambhar Lake, Rajasthan
              </Typography>
            </ContactCard>
          </Grid>
        </Grid>
        
        <SocialLinks>
          <IconButton
            href="https://www.linkedin.com/in/mahaveer-singh-20224524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            href="https://github.com/MahaveerSingh2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub fontSize="large" />
          </IconButton>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact; 