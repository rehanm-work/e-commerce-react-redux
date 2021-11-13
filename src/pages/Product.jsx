import { Stack } from '@mui/material';
import ProductImg from '../components/ProductImg';
import ProductInfo from '../components/ProductInfo';
import { data } from '../data';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const filteredData = (newProductId) => {
  const filteredProduct = data.filter((item) => {
    return item.productInfo.productId === parseInt(newProductId);
  });
  return filteredProduct[0];
};

const Product = () => {
  const matches = useMediaQuery('(max-width:380px)');
  const { productId } = useParams();
  const [newData, setNewData] = useState(filteredData(productId));

  useEffect(() => {
    setNewData(filteredData(productId));
  }, [productId]);
  return (
    <Stack
      sx={{
        marginTop: '2rem',
        '@media screen and (max-width: 380px)': { marginTop: 0 },
      }}
      direction={matches ? 'column' : 'row'}
      justifyContent='space-around'
    >
      <ProductImg productImgsList={newData.productImgs} />
      <ProductInfo
        img={newData.productImgs[0].thumbnail}
        productInfo={newData.productInfo}
      />
    </Stack>
  );
};

export default Product;
