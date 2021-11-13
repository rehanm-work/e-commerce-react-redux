import { Typography } from '@mui/material';

const SummaryList = ({ title, quantity, currentPrice }) => {
  return (
    <div>
      <Typography sx={{ padding: '1rem' }}>{title}</Typography>
      <Typography sx={{ padding: '0 1rem' }}>
        Quantity {quantity}{' '}
        <span style={{ fontWeight: '700', color: 'black', marginLeft: '30%' }}>
          {`$${(currentPrice * quantity).toFixed(2)}`}
        </span>
      </Typography>
    </div>
  );
};

SummaryList.defaultProps = {
  currentPrice: 0,
};

export default SummaryList;
