import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: (theme) => theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            margin: (theme) => theme.spacing(1),
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Container
          sx={{
            width: '100%', // Fix IE 11 issue.
            marginTop: (theme) => theme.spacing(1),
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              autoComplete='email'
              autoFocus
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              {...register('password', { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{
                submit: {
                  margin: (theme) => theme.spacing(3, 0, 2),
                },
              }}
            >
              Sign In
            </Button>
          </form>
        </Container>
      </Box>
    </Container>
  );
};

export default LoginForm;
