import React from "react";
import { Button, Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box sx={{ background: theme === 'dark' ? '#333' : '#fff', padding: '10px', textAlign: 'left', color: theme === 'dark' ? '#fff' : '#333', position: 'relative' }}>
      <Box sx={{ borderBottom: '1px solid black', width: '100%', position: 'absolute', top: '75%', zIndex: 1 }}></Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '-1px' }}>
        <Box sx={{ marginRight: '10px' }}>
          <GitHubIcon />
        </Box>
        <Button color="inherit" onClick={() => openInNewTab('https://github.com/StevenH01')}>
          GitHub
        </Button>

        <Box sx={{ marginLeft: '20px', marginRight: '10px' }}>
          <LinkedInIcon sx={{ color: '#0077b5' }} />
        </Box>
        <Button color="inherit" onClick={() => openInNewTab('https://www.linkedin.com/in/steven-ho-31a667211/')}>
          LinkedIn
        </Button>
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;