import {
  Box,
  Grid,
  Typography,
  Chip,
  Rating,
  Stack,
} from '@mui/material';
import React from 'react';
import { Edit } from '@mui/icons-material';

import NavBar from '../../src/components/Navbar';
import Image from 'next/image';
import withAuth from '../../src/containers/WithAuth';

const IndividualBook = () => {
  return (
    <>
      <NavBar />
      <main>
        <Box>
          <Grid
            container
            maxWidth='100%'
            sx={{ py: 15, px: 10 }}
            flexDirection='row'
            justifyContent='center'
          >
            <Grid
              item
              xs
              lg={4}
              xl={4}
              container
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
            >
              <Grid item>
                <Image
                  src='/book1.jpg'
                  alt='cleaning'
                  width={300}
                  height={300}
                />
              </Grid>
              <Grid
                item
                xs
                container
                alignItems='center'
                justifyContent='center'
                flexDirection='column'
              >
                <Grid item paddingY={2}>
                  <Chip
                    icon={<Edit />}
                    label='Want to read'
                    variant='outlined'
                  />
                </Grid>
                <Grid
                  item
                  container
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Rating value={5} readOnly sx={{ paddingRight: 1 }} />
                  <Typography variant='body1' sx={{ marginTop: 0.2 }}>
                    5
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs lg={4} xl={4}>
              <Grid item container flexDirection='column' marginBottom={2}>
                <Typography variant='h3'>The Psychology of money</Typography>
                <Typography variant='body2'>by Morgan Housel</Typography>
                <Box sx={{ display: 'flex', marginTop: 2 }}>
                  <Typography variant='body2'>
                    Doing well with money isn’t necessarily about what you know.
                    It’s about how you behave. And behavior is hard to teach,
                    even to really smart people. Money―investing, personal
                    finance, and business decisions―is typically taught as a
                    math-based field, where data and formulas tell us exactly
                    what to do. But in the real world people don’t make
                    financial decisions on a spreadsheet. They make them at the
                    dinner table, or in a meeting room, where personal history,
                    your own unique view of the world, ego, pride, marketing,
                    and odd incentives are scrambled together. In The Psychology
                    of Money, award-winning author Morgan Housel shares 19 short
                    stories exploring the strange ways people think about money
                    and teaches you how to make better sense of one of life’s
                    most important topics.
                  </Typography>
                </Box>
              </Grid>
              <Grid item container alignItems='center'>
                <Stack direction='row' spacing={1}>
                  <Chip label='Fiction' color='primary' />
                  <Chip label='Drama' color='success' />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default withAuth(IndividualBook);
