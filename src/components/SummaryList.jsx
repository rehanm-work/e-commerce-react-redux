import { Typography } from '@mui/material';

const SummaryList = ({ title, quantity, currentPrice }) => {
  return (
    <>
      <Typography sx={{ padding: '1rem' }}>
        {title}
        <Typography>
          Quantity {quantity}{' '}
          <span
            style={{ fontWeight: '700', color: 'black', marginLeft: '30%' }}
          >
            {`$${(currentPrice * quantity).toFixed(2)}`}
          </span>
        </Typography>
      </Typography>
    </>
  );
};

SummaryList.defaultProps = {
  currentPrice: 0,
};

export default SummaryList;
