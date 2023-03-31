import React from 'react';
import NavBar from '../src/components/Navbar';
import AutocompleteComponent from '../src/components/Autocomplete';
import { Container } from '@mui/material';
import withAuth from '../src/containers/WithAuth';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          py: 10,
          px: 10,
        }}
      >
        <AutocompleteComponent fullWidth />
      </Container>
    </>
  );
};

export default withAuth(Home);
