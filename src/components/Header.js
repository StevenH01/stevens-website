import React from "react";
import { Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Contact from './Contact';

const Header = () => {

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ background: '#333', padding: '10px', textAlign: 'left', color: '#fff', position: 'fixed', width: '100%', zIndex: 1000 }}>
      <Box sx={{ borderBottom: '2px solid white', width: 'calc(100% - 20px)', position: 'absolute', top: '100%', left: '10px' }}></Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ marginRight: '10px' }} onClick={() => openInNewTab('https://github.com/StevenH01')}>
          <GitHubIcon sx={{ color: '#fff', cursor: 'pointer' }} />
        </Box>
        <Button color="inherit" onClick={() => openInNewTab('https://github.com/StevenH01')} style={{ cursor: 'pointer' }}>
          GitHub
        </Button>
        <Box sx={{ marginLeft: '20px', marginRight: '10px' }}>
          <LinkedInIcon sx={{ color: '#0077b5' }} />
        </Box>
        <Button color="inherit" onClick={() => openInNewTab('https://www.linkedin.com/in/steven-ho-31a667211/')}>
          LinkedIn
        </Button>
      </Box>
      <Contact />
    </Box>
  );
};

export default Header;
