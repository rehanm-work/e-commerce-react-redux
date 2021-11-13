import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { data } from '../data';

const filterData = (filter) => {
  return filter === ''
    ? data
    : data.filter((item) => item.productInfo.gender === filter);
};

const ProductsList = ({ filter }) => {
  const [filterState, setFilterState] = useState(filter);
  const newData = filterData(filterState);

  useEffect(() => {
    setFilterState(filter);
  }, [filter]);

  return (
    <Box
      component='div'
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '2rem',
        rowGap: '2rem',
        justifyContent: 'start',
        margin: 'auto auto 2rem !important',
        '@media screen and (max-width: 1025px)': {
          gridTemplateColumns: '1fr 1fr 1fr',
        },
        '@media screen and (max-width: 770px)': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@media screen and (max-width: 540px)': {
          gridTemplateColumns: '1fr',
          justifyItems: 'center',
          width: '100vw',
        },
      }}
    >
      {newData.map((item, index) => {
        const { img } = item.productImgs[0];
        return <ItemCard key={index} img={img} {...item.productInfo} />;
      })}
    </Box>
  );
};

export default ProductsList;
