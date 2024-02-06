import React, { useState } from 'react';
import { Container, Grid, Tab, Tabs } from '@mui/material';
import Header from './Header';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectPage from './ProjectsPage';
import HomePage from './HomePage'; // Import the HomePage component

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showTabs, setShowTabs] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMouseEnter = () => {
    setShowTabs(true);
  };

  const handleMouseLeave = () => {
    setShowTabs(false);
  };

  return (
    <Grid sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Header />
      <Container sx={{ background: '#333', minHeight: '100vh', minWidth: '100vw', color: '#fff', position: 'relative' }}>
        <Grid grid item={3} sx={{ position: 'absolute', left: 0, top: '10px', maxWidth: '200px', color: 'inherit', textAlign: 'left' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showTabs && (
            <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange} >
              <Tab label="Home" sx={{ color: 'white' }} />
              <Tab label="About" sx={{ color: 'white' }} />
              <Tab label="Resume" sx={{ color: 'white' }} />
              <Tab label="Projects" sx={{ color: 'white' }} />
            </Tabs>
          )}
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
          {selectedTab === 0 && <HomePage />}
          {selectedTab === 1 && <AboutPage />}
          {selectedTab === 2 && <ResumePage />}
          {selectedTab === 3 && <ProjectPage />}
        </Grid>
      </Container>
    </Grid>
  );
}

export default MainPage;
