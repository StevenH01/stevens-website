import { Container, Grid } from '@mui/material';
import React from 'react';

const MainPage = () => {
  return (
    <Grid sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Container sx={{ background: '#333', minHeight: '100vh', minWidth: '100vw' }}>
        <Grid grid item={3} sx={{ maxWidth: '200px'}}>
          Tabs section
        </Grid>
        <Grid grid item={6} sx={{
          background: '#333',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          '@media (min-width:600px)': {
            padding: '50px'
          },
          '@media (min-width:900px)': {
            padding: '100px'
          }
        }}>
          Build the body of the website here
        </Grid>
      </Container>
    </Grid>
  );
}

export default MainPage;