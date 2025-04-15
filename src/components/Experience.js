import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Work } from '@mui/icons-material';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ExperienceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const experiences = [
  {
    company: 'Celebal Technologies',
    position: 'Intern',
    period: 'June 2024 - August 2024',
    description: 'Worked with databases and gained valuable experience in data management and system architecture.',
  },
  {
    company: 'Zeetron Networks',
    position: 'MERN Stack Trainee',
    period: 'May 2024 - July 2024',
    description: 'Enhanced skills in MERN stack development through hands-on experience with real-time projects.',
  },
  {
    company: 'Zeetron Networks',
    position: 'Python & SQL Intern',
    period: 'June 2023 - July 2023',
    description: 'Learned and implemented Python libraries and SQL queries for database management. Explored various Python functionalities and database operations.',
  },
  {
    company: 'Engineering College Ajmer',
    position: 'C/C++ Programming Intern',
    period: 'August 2022 - September 2022',
    description: 'Gained experience in C/C++ programming and database management using SQL queries.',
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ExperienceCard elevation={3}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Work color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h5" component="h3">
                      {exp.company}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.position}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {exp.period}
                  </Typography>
                  <Typography variant="body1">
                    {exp.description}
                  </Typography>
                </CardContent>
              </ExperienceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 