import React from 'react';
import { Container, Box } from '@mui/material';

import NavBar from '../../src/components/Navbar';
import AddBookForm from '../../src/components/forms/AddBook';
import withAuth from '../../src/containers/WithAuth';

const AddBook = () => {
  return (
    <>
      <NavBar />
      <main>
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
            <AddBookForm />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default withAuth(AddBook);
