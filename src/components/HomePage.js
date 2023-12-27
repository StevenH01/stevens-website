import React from "react";
import { Button, Stack, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../ThemeContext';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', padding: '10px', textAlign: 'left', color: theme === 'dark' ? '#fff' : '#333', position: 'relative' }}>
      {/* Divider Line */}
      <div style={{ borderBottom: '1px solid black', width: '100%', position: 'absolute', top: '75%', zIndex: 1 }}></div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-1px' }}>
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
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;