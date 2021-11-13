import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductInfo = ({ productInfo, img }) => {
  const {
    productId,
    company,
    title,
    desc,
    originalPrice,
    currentPrice,
    discount,
  } = productInfo;
  const [quantityCount, setQuantityCount] = useState(1);
  const matches = useMediaQuery('(max-width:380px)');
  const dispatch = useDispatch();
  return (
    <>
      {matches ? (
        <Box sx={{ maxWidth: '430px', mt: 5, padding: '2rem' }}>
          <Typography
            color='primary'
            variant='subtitle2'
            sx={{ textTransform: 'uppercase', fontWeight: '700' }}
          >
            {company}
          </Typography>
          <Typography
            sx={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: 'hsl(219, 9%, 45%)', marginBottom: '2rem' }}>
            {desc}
          </Typography>
          <Typography
            variant='h5'
            sx={{ fontWeight: '700', display: 'flex', alignItems: 'center' }}
          >
            ${currentPrice.toFixed(2)}
            <Typography
              color='primary'
              sx={{
                backgroundColor: 'hsl(25, 100%, 94%)',
                display: 'inline-block',
                marginLeft: '1rem',
                fontWeight: '700',
                fontSize: '18px',
                padding: '0 10px 0',
                borderRadius: '5px',
              }}
            >
              {discount}%
            </Typography>
            <Typography
              sx={{
                color: 'hsl(220, 14%, 75%)',
                marginLeft: 'auto',
                fontSize: '16px',
                display: 'inline-block',
                textDecoration: 'line-through',
                fontWeight: '700',
              }}
            >
              ${originalPrice.toFixed(2)}
            </Typography>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '90%',
                height: '3.1rem',
                marginBottom: '1.3rem',
                padding: '0 1rem 0',
                justifyContent: 'space-between',
                backgroundColor: 'hsl(223, 64%, 98%)',
                borderRadius: '15px',
                '& img': {
                  cursor: 'pointer',
                  padding: '5px',
                  '&:hover': {
                    opacity: '0.5',
                  },
                },
              }}
            >
              <img
                onClick={() => {
                  quantityCount > 1 && quantityCount !== 0
                    ? setQuantityCount(quantityCount - 1)
                    : setQuantityCount(quantityCount);
                }}
                src='/images/icon-minus.svg'
                alt='minus-img'
              />
              <h2>{quantityCount}</h2>
              <img
                onClick={() => {
                  setQuantityCount(quantityCount + 1);
                }}
                src='/images/icon-plus.svg'
                alt='plus-img'
              />
            </Box>
            <Button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: productId,
                    quantity: quantityCount,
                    title: title,
                    currentPrice: currentPrice,
                    img: img,
                  })
                );
              }}
              startIcon={
                <img
                  style={{ color: 'white' }}
                  src='/images/icon-cart-button.svg'
                  alt='crt-img'
                />
              }
              sx={{
                width: '100%',
                padding: '1rem',
                color: 'white',
                background: 'hsl(26, 100%, 55%)',
                fontWeight: '700',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem: 'center',
                borderRadius: '15px',
                '&:hover': {
                  backgroundColor: 'hsl(26, 100%, 55%)',
                  opacity: '0.5',
                },
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ maxWidth: '430px', mt: 5 }}>
          <Typography
            color='primary'
            variant='subtitle2'
            sx={{ textTransform: 'uppercase', fontWeight: '700' }}
          >
            {company}
          </Typography>
          <Typography
            sx={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: 'hsl(219, 9%, 45%)', marginBottom: '2rem' }}>
            {desc}
          </Typography>
          <Typography
            variant='h5'
            sx={{ fontWeight: '700', display: 'flex', alignItems: 'center' }}
          >
            ${currentPrice.toFixed(2)}
            <Typography
              color='primary'
              sx={{
                backgroundColor: 'hsl(25, 100%, 94%)',
                display: 'inline-block',
                marginLeft: '1rem',
                fontWeight: '700',
                fontSize: '18px',
                padding: '0 10px 0',
                borderRadius: '5px',
              }}
            >
              {discount}%
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: 'hsl(220, 14%, 75%)',
              textDecoration: 'line-through',
              fontWeight: '700',
            }}
          >
            ${originalPrice.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', mt: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 1rem 0',
                justifyContent: 'space-between',
                backgroundColor: 'hsl(223, 64%, 98%)',
                maxWidth: '125px',
                borderRadius: '15px',
                '& img': {
                  cursor: 'pointer',
                  padding: '5px',
                  '&:hover': {
                    opacity: '0.5',
                  },
                },
              }}
            >
              <img
                onClick={() => {
                  quantityCount > 1 && quantityCount !== 0
                    ? setQuantityCount(quantityCount - 1)
                    : setQuantityCount(quantityCount);
                }}
                src='/images/icon-minus.svg'
                alt='minus-img'
              />
              <h2>{quantityCount}</h2>
              <img
                onClick={() => {
                  setQuantityCount(quantityCount + 1);
                }}
                src='/images/icon-plus.svg'
                alt='plus-img'
              />
            </Box>
            <Button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: productId,
                    quantity: quantityCount,
                    title: title,
                    currentPrice: currentPrice,
                    img: img,
                  })
                );
              }}
              startIcon={
                <img
                  style={{ color: 'white' }}
                  src='/images/icon-cart-button.svg'
                  alt='crt-img'
                />
              }
              sx={{
                color: 'white',
                background: 'hsl(26, 100%, 55%)',
                fontWeight: '700',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem: 'center',
                borderRadius: '15px',
                marginLeft: '1rem',
                '&:hover': {
                  backgroundColor: 'hsl(26, 100%, 55%)',
                  opacity: '0.5',
                },
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductInfo;
