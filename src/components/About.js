import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const AboutContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
}));

const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <AboutContent elevation={3}>
          <Typography variant="body1" paragraph>
            I am a passionate MERN Stack Developer with a strong foundation in computer science,I have completed my B.Tech in Computer Science Engineering at Bikaner Technical University with a CGPA of 9.18 in the year 2025.
          </Typography>
          <Typography variant="body1" paragraph>
            My expertise lies in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have hands-on experience with Python, C/C++, and database management systems, which I've applied in various projects and internships.
          </Typography>
          <Typography variant="body1">
            I am constantly learning and exploring new technologies to stay at the forefront of web development. My goal is to create innovative and efficient solutions that make a positive impact.
          </Typography>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 
