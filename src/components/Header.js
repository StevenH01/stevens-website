import React from "react";
import { Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ background: '#fff', padding: '10px', textAlign: 'left', color: 'inherit', position: 'relative' }}>
      <Box sx={{ borderBottom: '1px solid black', width: '100%', position: 'absolute', top: '75%', zIndex: 1 }}></Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-1px' }}>
        <Box sx={{ marginRight: '10px' }} onClick={() => openInNewTab('https://github.com/StevenH01')}>
          <GitHubIcon sx={{ color: '#333', cursor: 'pointer' }} />
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
    </Box>
  );
};

export default Header;