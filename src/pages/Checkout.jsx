import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CheckoutList from '../components/CheckoutList';
import TotalSummary from '../components/TotalSummary';
import useMediaQuery from '@mui/material/useMediaQuery';

const Checkout = () => {
  const history = useHistory();
  const quantity = useSelector((state) => state.cart.value.length);
  const matches = useMediaQuery('(max-width:770px)');
  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-around'
        sx={{
          height: '100vh',
        }}
      >
        {quantity !== 0 ? (
          matches ? (
            <Box
              sx={{
                '@media screen and (max-width: 1025px)': {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  margin: '1rem',
                },
              }}
            >
              <CheckoutList />
              <TotalSummary />
            </Box>
          ) : (
            <>
              <CheckoutList />
              <TotalSummary />
            </>
          )
        ) : (
          <Stack direction='column'>
            <Typography
              variant='h2'
              sx={{
                color: 'hsl(26, 100%, 55%)',
                margin: '2rem',
                '@media screen and (max-width: 1025px)': {
                  fontSize: '1.75rem',
                  padding: '1rem',
                },
              }}
            >
              No Item in Cart
            </Typography>
            <Button
              variant='outlined'
              onClick={() => {
                history.push('/');
              }}
            >
              Go To Shop
            </Button>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Checkout;
