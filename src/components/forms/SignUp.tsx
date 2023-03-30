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
import { styled } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const StyledSignUpForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const SignUpForm = () => {
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
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledAvatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </StyledAvatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='firstname'
                required
                fullWidth
                label='First Name'
                id='firstName'
                autoFocus
                {...register('firstName', { required: true })}
              />
              {errors.firstName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                autoComplete='lastname'
                {...register('lastName', { required: true })}
              />
              {errors.lastName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                {...register('email', { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                {...register('password', { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive updates via email.'
              />
            </Grid>
          </Grid>
          <StyledButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </StyledButton>
        </StyledSignUpForm>
      </Box>
    </Container>
  );
};

export default SignUpForm;
