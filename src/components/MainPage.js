import React, { useState } from 'react';
import { Container, Grid, Tab, Tabs } from '@mui/material';
import Header from './Header';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectPage from './ProjectsPage';
import HomePage from './HomePage';

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Header />
      <Container sx={{ background: '#333', minHeight: '100vh', minWidth: '100vw', color: '#fff', position: 'relative' }}>
        <Grid
          item
          xs={3}
          sx={{
            position: 'absolute',
            left: 0,
            top: 70,
            bottom: 0,
            maxWidth: '150px',
            color: 'inherit',
            textAlign: 'left',
            zIndex: 1,
          }}
        >
          <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange} sx={{ width: '100%' }}>
            <Tab label="Home" sx={{ color: 'white', width: '150px' }} />
            <Tab label="About" sx={{ color: 'white', width: '150px' }} />
            <Tab label="Resume" sx={{ color: 'white', width: '150px' }} />
            <Tab label="Projects" sx={{ color: 'white', width: '150px' }} />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            background: '#333',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            '@media (min-width:600px)': {
              padding: '50px',
            },
            '@media (min-width:900px)': {
              padding: '100px',
            },
          }}
        >
          {selectedTab === 0 && <HomePage />}
          {selectedTab === 1 && <AboutPage />}
          {selectedTab === 2 && <ResumePage />}
          {selectedTab === 3 && <ProjectPage />}
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainPage;
