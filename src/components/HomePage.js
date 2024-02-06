import React from 'react';
import { Container, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#333',
    textDecoration: 'underline',
  },
  content: {
    marginBottom: theme.spacing(2),
    fontFamily: 'Arial, sans-serif',
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.5',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title} sx={{ marginLeft: '50px'}}>Welcome to my personal website!</Typography>
      <Container>
        <Typography variant="body1" className={classes.content}>
          Hello, welcome to my personal website.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Here, I will be putting into practice my journey through web development.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          For this website, my tech stack includes: JavaScript, React.JS, Node.JS, CSS, and Material-UI.
        </Typography>
      </Container>
    </Container>
  );
};

export default HomePage;
