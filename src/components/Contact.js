import React, { useState } from 'react';
import { Button, Popover, Typography, Box } from '@mui/material';

const Contact = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:steven09ho@gmail.com';
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        sx={{ color: 'inherit', position: 'absolute', top: 8, right: '0%', transform: 'translateX(-30%)' }}
        onClick={handleClick}
      >
        Contact Info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <Typography onClick={handleEmailClick} sx={{ cursor: 'pointer' }}>
            Email: steven09ho@gmail.com
          </Typography>
          <Typography>Phone: (916)709-8025</Typography>
          {/* Add more contact information as needed */}
        </Box>
      </Popover>
    </>
  );
};

export default Contact;