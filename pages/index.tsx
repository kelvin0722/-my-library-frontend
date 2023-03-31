import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import NavBar from '../src/components/Navbar';
import AuthenticationContainer from '../src/containers/Authentication';

export default function Home() {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AuthenticationContainer />
        </Box>
      </Container>
    </>
  );
}
