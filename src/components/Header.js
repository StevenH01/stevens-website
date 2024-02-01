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
    <Box sx={{ background: '#333', padding: '10px', textAlign: 'left', color: '#fff', position: 'relative' }}>
      <Box sx={{ borderBottom: '3px solid white', width: 'calc(100% - 10px)', position: 'absolute', top: '75%', left: '5px', zIndex: 1 }}></Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-1px' }}>
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