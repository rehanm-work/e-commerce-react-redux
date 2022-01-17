import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  TextField,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from '../components/useForm';
import login_info_validation from '../validation/login_info_validation';
import { Link } from 'react-router-dom';

const initialValue = {
  page: 'signIn',
  email: '',
  password: '',
  remember: false,
};

export default function SignIn({ setIsLoggedIn }) {
  const { errors, values, handleChange, handleSubmit } = useForm(
    initialValue,
    login_info_validation,
    setIsLoggedIn
  );

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' method='POST' noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            value={values.email}
            helperText={errors.email}
            onChange={handleChange}
            autoFocus
            sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={values.password}
            helperText={errors.password}
            onChange={handleChange}
            sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={handleChange}
                sx={{ mt: 3, mb: 2 }}
                name='remember'
                value='remember'
                color='primary'
              />
            }
            label='Remember me'
          />
          <Button
            onClick={handleSubmit}
            sx={{ color: 'white' }}
            type='submit'
            fullWidth
            variant='contained'
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item sx={{ marginTop: '5px' }}>
              <Link
                to='/sign-up'
                style={{
                  textDecoration: 'underline',
                  color: 'hsl(26, 100%, 55%)',
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
