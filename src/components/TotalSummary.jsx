import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import SummaryList from './SummaryList';

const TotalSummary = () => {
  const cart = useSelector((state) => state.cart.value);
  let total = [];
  // function totalBill(total., num) {
  //   return total - num;
  // }
  // cart.reduce
  return (
    <Box>
      <Typography variant='h5' sx={{ textAlign: 'center', margin: '1rem' }}>
        Summary
      </Typography>
      <Stack
        sx={{
          background: 'hsl(223, 64%, 98%)',
          padding: '1rem',
          minHeight: '148px',
          '& > *': { color: 'hsl(219, 9%, 45%)', minWidth: '250px' },
        }}
      >
        <Stack
          alignItems='center'
          sx={{ border: '1px solid hsl(26, 100%, 55%)' }}
        >
          {cart.map((item) => {
            total.push(item.currentPrice * item.quantity).toFixed(2);
            return <SummaryList key={item.id} {...item} />;
          })}
        </Stack>
        <Stack alignItems='stretch' sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              border: '1px solid hsl(26, 100%, 55%)',
              padding: '1rem',
              marginTop: '8px',
            }}
          >
            TOTAL{' '}
            <span
              style={{
                fontWeight: '700',
                color: 'black',
                marginLeft: '35%',
                marginTop: '8px',
              }}
            >
              {`$${total.reduce((a, b) => a + b).toFixed(2)}`}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TotalSummary;
