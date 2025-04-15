import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SkillSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const skills = [
  { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { category: 'Programming', items: ['Python', 'C/C++', 'SQL'] },
  { category: 'Tools & Others', items: ['Git', 'MERN Stack', 'Database Management'] },
];

const Skills = () => {
  return (
    <SkillSection id="skills">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skillGroup, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SkillCard elevation={3}>
                <Typography variant="h6" gutterBottom color="primary">
                  {skillGroup.category}
                </Typography>
                {skillGroup.items.map((skill, idx) => (
                  <Typography key={idx} variant="body1" paragraph>
                    {skill}
                  </Typography>
                ))}
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillSection>
  );
};

export default Skills; 