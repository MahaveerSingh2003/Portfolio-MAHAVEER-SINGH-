import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ProjectSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const projects = [
  {
    title: 'Chatpot: A Connection to Department',
    description: 'Led the development of a MERN stack-based chatbot with NLP capabilities for college-related queries. Features include real-time query handling and college guide functionality.',
    tech: 'MERN Stack, Python, NLP, React.js',
    github: 'https://github.com/MahaveerSingh2003/Colllege_enquiry_chatbot'
  },
  {
    title: 'Database Management System',
    description: 'Real-time database project built using MongoDB, React.js, Node.js, and Express.js. Implemented full CRUD functionality with modern UI/UX design.',
    tech: 'MongoDB, Express.js, React.js, Node.js',
    github: 'https://github.com/MahaveerSingh2003'
  },
  {
    title: 'Website Design',
    description: 'Developed a responsive local website showcasing modern web development practices and user-centric design principles.',
    tech: 'HTML, CSS, JavaScript, React.js',
    github: 'https://github.com/MahaveerSingh2003'
  }
];

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Technologies: {project.tech}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectSection>
  );
};

export default Projects; 