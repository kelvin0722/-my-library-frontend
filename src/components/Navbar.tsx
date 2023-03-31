import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import BookSearch from './BookSearch';

import useToken from '../hooks/useToken';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [token] = useToken()
  const router = useRouter();
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
          {token ? (
            <>
              <BookSearch />
              <Button
                color='inherit'
                sx={{
                  textTransform: 'none',
                }}
                onClick={() => router.push('../')}
              >
                Collection
              </Button>
              <Button
                color='inherit'
                sx={{
                  textTransform: 'none',
                }}
                onClick={() => router.push('./book/add')}
              >
                Add Book
              </Button>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
