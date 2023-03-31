import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{
              flexGrow: 1,
            }}
          >
            My Library
            <IconButton
              sx={{
                color: 'whitesmoke',
              }}
            >
              <CollectionsBookmarkIcon />
            </IconButton>
          </Typography>
          <Button
            color='inherit'
            sx={{
              textTransform: 'none',
            }}
          >
            Home
          </Button>
          <Button
            color='inherit'
            sx={{
              textTransform: 'none',
            }}
          >
            My Books
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
