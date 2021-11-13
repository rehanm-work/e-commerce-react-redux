import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCartOne } from '../features/cart';

const ItemCard = ({
  productId,
  img,
  desc,
  title,
  originalPrice,
  currentPrice,
  discount,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Grid item>
      <Card sx={{ maxWidth: 290 }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='230px'
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
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
          <Typography variant='body2' color='text.secondary'>
            {`${desc.substring(0, 50)}...`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              dispatch(
                addToCartOne({
                  id: productId,
                  quantity: 1,
                  title: title,
                  currentPrice: currentPrice,
                  img: img,
                })
              );
            }}
            size='small'
          >
            Add to cart
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: `/product/${productId}`,
                state: productId,
              })
            }
            size='small'
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemCard;
