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
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from '../components/useForm';
import validate_info from '../validation/validate_info';

const initialValue = {
  page: 'signUp',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  password2: '',
  agreement: false,
};

export default function SignUp() {
  const { errors, values, handleChange, handleSubmit } = useForm(
    initialValue,
    validate_info
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
          Sign up
        </Typography>
        <Box
          component='form'
          method='POST'
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                value={values.firstName}
                helperText={errors.firstName}
                onChange={handleChange}
                sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                value={values.lastName}
                helperText={errors.lastName}
                onChange={handleChange}
                sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                value={values.email}
                helperText={errors.email}
                onChange={handleChange}
                sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password2'
                label='Confirm Password'
                type='password'
                id='password'
                value={values.password2}
                helperText={errors.password2}
                onChange={handleChange}
                sx={{ '.MuiFormHelperText-root': { color: 'red' } }}
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={handleChange}
                    name='agreement'
                    value='agreement'
                    color='primary'
                  />
                }
                label='I accept all terms and conditions.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, color: 'white' }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                to='/sign-in'
                style={{
                  textDecoration: 'underline',
                  color: 'hsl(26, 100%, 55%)',
                }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
