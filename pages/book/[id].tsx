import {
  Box,
  Grid,
  Typography,
  Chip,
  Rating,
  Stack,
  Skeleton,
} from '@mui/material';
import React from 'react';
import { Edit } from '@mui/icons-material';

import NavBar from '../../src/components/Navbar';
import Image from 'next/image';
import withAuth from '../../src/containers/WithAuth';
import { useRouter } from 'next/router';
import { useBookQuery } from '../../src/graphql/generated/gql';

const IndividualBook = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, loading } = useBookQuery({
    variables: {
      id: parseInt(id, 10),
    },
    skip: !router.query.id,
  });
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
                {loading ? (
                  <Skeleton variant='rectangular' width={300} height={300} />
                ) : (
                  <Image
                    src={data?.book?.coverImage || ''}
                    alt='cleaning'
                    width={300}
                    height={300}
                  />
                )}
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
                <Typography variant='h3'>{data?.book?.title}</Typography>
                <Typography variant='body2'>{data?.book?.author}</Typography>
                <Box sx={{ display: 'flex', marginTop: 2 }}>
                  <Typography variant='body2'>
                    {data?.book?.description}
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
