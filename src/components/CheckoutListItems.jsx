import { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeItem } from '../features/cart';

const CheckoutListItems = (props) => {
  const dispatch = useDispatch();
  const { id, quantity, title, currentPrice, img } = props;
  const minValue = 1; //Or whichever number you want
  const maxValue = 6;
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    if (quantity > maxValue) {
      dispatch(changeQuantity({ id: id, quantity: maxValue }));
      setValue(maxValue);
    }
  }, [dispatch, id, quantity]);

  //Executes when the value changes
  const handlePlus = (e) => {
    const newValue = Math.min(Math.max(value + 1, minValue), maxValue);
    setValue(newValue);
    dispatch(changeQuantity({ id: id, quantity: newValue }));
  };
  const handleMinus = (e) => {
    const newValue = Math.min(Math.max(value - 1, minValue), maxValue);
    setValue(newValue);
    dispatch(changeQuantity({ id: id, quantity: newValue }));
  };
  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        sx={{
          padding: '1rem',
          background: 'hsl(223, 64%, 98%)',
          '& > *': { margin: '1rem', color: 'hsl(219, 9%, 45%)' },
          '@media screen and (max-width: 426px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          component='img'
          src={img}
          alt='product-img'
          sx={{
            width: '80px',
            maxHeight: '80xp',
            borderRadius: '15px',
            '@media screen and (max-width: 1025px)': { width: '100px' },
          }}
        />
        <Box
          component='div'
          sx={{
            minWidth: '250px',
            '@media screen and (max-width: 1025px)': { textAlign: 'center' },
          }}
        >
          <Typography sx={{ fontWeight: '700' }}>{title}</Typography>
          <Typography sx={{ margin: '0.5rem' }}>
            <span style={{ fontWeight: '700', color: 'black' }}>
              {`$${currentPrice.toFixed(2)}`}{' '}
            </span>{' '}
            x {quantity}
          </Typography>
        </Box>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            alignItems: 'center',
            '@media screen and (max-width: 1025px)': {
              columnGap: '1rem',
              padding: 0,
              margin: 0,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '90%',
              height: '3.1rem',
              padding: '0 1rem 0',
              justifyContent: 'space-between',
              backgroundColor: 'hsl(223, 64%, 98%)',
              borderRadius: '15px',
              '& img': {
                cursor: 'pointer',
                padding: '5px',
              },
            }}
          >
            <img
              onClick={handleMinus}
              src='/images/icon-minus.svg'
              alt='minus-img'
            />
            <h2>{value}</h2>
            <img
              onClick={handlePlus}
              src='/images/icon-plus.svg'
              alt='plus-img'
            />
          </Box>
          <Button
            onClick={() => dispatch(removeItem({ id: id }))}
            sx={{
              maxWidth: '120px',
              marginTop: '1rem',
            }}
          >
            Remove Item
          </Button>
        </Box>
      </Stack>
    </>
  );
};

CheckoutListItems.defaultProps = {
  currentPrice: 0,
};

export default CheckoutListItems;
