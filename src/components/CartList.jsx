import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Stack,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const CartList = ({ setIsOpen }) => {
  const cartList = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      {cartList.map((item) => {
        return (
          <Stack key={item.id} direction='column' justifyContent='center'>
            <Card elevation={0} sx={{ alignItems: 'center' }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant='square'
                    src={item.img}
                    alt='thumbnail1-img'
                  />
                }
                action={
                  <IconButton
                    onClick={() => {
                      dispatch(removeItem({ id: item.id }));
                    }}
                    sx={{
                      padding: '8px 8px 8px 20px',
                      '&:hover': {
                        backgroundColor: 'white',
                        '& img:hover': {
                          filter:
                            'invert(57%) sepia(6%) saturate(93%) hue-rotate(109deg) brightness(89%) contrast(85%)',
                        },
                      },
                    }}
                    disableRipple
                    aria-label='delete'
                  >
                    <img src='/images/icon-delete.svg' alt='delete-icon' />
                  </IconButton>
                }
                title={item.title}
                subheader={
                  <>
                    {`$${item.currentPrice.toFixed(2)} x ${item.quantity}`}
                    <span
                      style={{
                        fontWeight: '700',
                        color: 'black',
                        marginLeft: '10px',
                      }}
                    >
                      {`$${(item.currentPrice * item.quantity).toFixed(2)}`}
                    </span>
                  </>
                }
                sx={{
                  '.MuiAvatar-img': {
                    borderRadius: '5px',
                  },
                  '.MuiCardHeader-action': {
                    marginTop: '5px',
                    marginLeft: '5px',
                  },
                  '.MuiCardHeader-title': {
                    minWidth: '220px',
                  },
                  '.MuiCardHeader-title, .MuiCardHeader-subheader': {
                    fontSize: '14px',
                    color: '#68707d',
                  },
                }}
              />
            </Card>
          </Stack>
        );
      })}
      <Button
        disableRipple
        color='primary'
        variant='contained'
        onClick={() => {
          setIsOpen(false);
          history.push('/checkout');
        }}
        sx={{
          color: 'white',
          width: '90%',
          margin: '0 16px 16px',
          textTransform: 'none',
          fontWeight: '700',
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartList;
