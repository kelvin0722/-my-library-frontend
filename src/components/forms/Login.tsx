import React, { useEffect, useState } from 'react';
import { makeStyles, styled } from '@mui/styles';
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
import { AuthInput, useLoginMutation } from '../../graphql/generated/gql';
import { useRouter } from 'next/router';

const ErrorMessage = styled(Typography)({
  color: 'red',
  marginBottom: 2,
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm();

  const [login, { loading, error: loginError }] = useLoginMutation();
  const router = useRouter();
  const emailFieldValue = getValues('email');
  const passwordFieldValue = getValues('password');

  const onSubmit = async (formData: any) => {
    try {
      const { data } = await login({
        variables: {
          input: formData,
        },
      });
      localStorage.setItem;
      if (data) {
        localStorage.setItem('token', data?.login?.token);
        router.push('/');
      }
    } catch (error: any) {
      setError('form', {
        type: 'server',
        message: error.message,
      });
    }
  };

  useEffect(() => {
    // clear form errors
    clearErrors('form');
  }, [passwordFieldValue, emailFieldValue]);

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
            {errors.email && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
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
            {errors.password && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
            {errors.form && (
              <ErrorMessage variant='body1'>
                {errors.form.message as string}
              </ErrorMessage>
            )}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={loading}
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
