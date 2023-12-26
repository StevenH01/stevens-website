import React from "react";
import { Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../Themecontext';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();

  const openInNewTab = (url) => {
      window.open(url, '_blank');
  };

  return (
    <div style={{ background: 'white', padding: '10px', textAlign: 'left', color: 'black', display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <GitHubIcon />
      </div>
      <Button color="inherit" onClick={() => openInNewTab('https://github.com/StevenH01')}>
        GitHub
      </Button>

      <div style={{ marginLeft: '20px', marginRight: '10px' }}>
        <LinkedInIcon style={{ color: '#0077b5' }} />
      </div>
      <Button color="inherit" onClick={() => openInNewTab('https://www.linkedin.com/in/steven-ho-31a667211/')}>
        LinkedIn
      </Button>

      <Button style={{ position: 'absolute', top: 0, right: 0 }} onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default HomePage;