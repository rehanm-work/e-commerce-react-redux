import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CheckoutListItems from './CheckoutListItems';

const CheckoutList = () => {
  const cart = useSelector((state) => state.cart.value);
  return (
    <Box>
      <Typography variant='h5' sx={{ textAlign: 'center', margin: '1rem' }}>
        Item In Your Cart
      </Typography>
      {cart.map((item) => (
        <CheckoutListItems key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default CheckoutList;
