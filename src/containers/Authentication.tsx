import { useState } from 'react';
import { Button, Grid, styled } from '@mui/material';
import SignUpForm from '../components/forms/SignUp';
import LoginForm from '../components/forms/Login';

const StyledContainer = styled(Grid)(({ theme }) => ({
  height: 'auto',
  backgroundColor: theme.palette.background.default,
  transition: 'height 0.5s ease-in-out',
}));

const AuthenticationContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <StyledContainer container justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={8} md={5}>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Button
              href='#text-buttons'
              sx={{
                textDecoration: 'underline',
                textTransform: 'none',
                marginTop: 2
              }}
              onClick={() => handleToggleForm()}
            >
              {' '}
              {isSignUp
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AuthenticationContainer;
