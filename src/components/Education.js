import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { School } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const EducationSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const EducationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const education = [
  {
    degree: 'B.Tech (CSE)',
    institution: 'Bikaner Technical University',
    year: 'Current',
    score: '9.03 CGPA',
  },
  {
    degree: 'Class XII',
    institution: 'Rajasthan Board',
    year: '2021',
    score: '95.2%',
  },
  {
    degree: 'Class X',
    institution: 'Rajasthan Board',
    year: '2019',
    score: '82.17%',
  },
];

const Education = () => {
  return (
    <EducationSection id="education">
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <EducationCard elevation={3}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <School color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h5" component="h3">
                      {edu.degree}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary">
                    {edu.institution}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Year: {edu.year}
                  </Typography>
                  <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
                    Score: {edu.score}
                  </Typography>
                </CardContent>
              </EducationCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </EducationSection>
  );
};

export default Education; 