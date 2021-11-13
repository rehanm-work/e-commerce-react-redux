import { useState } from 'react';
import CustomizedDialogs from './Lightbox';
import Thumbnail from './Thumbnail';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconButton, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ProductImg = ({ productImgsList }) => {
  const matches = useMediaQuery('(max-width:380px)');
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (newIndex) => setIndex(newIndex);
  return (
    <>
      {matches ? (
        <Stack
          direction='row'
          alignItems='center'
          sx={{ position: 'relative', overflow: 'hidden' }}
        >
          <IconButton
            disableRipple
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              '@media screen and (max-width: 330px)': {
                left: '-6px',
              },
              '&.Mui-disabled': {
                opacity: '0.6',
                '& svg': { color: 'hsl(219deg 9% 45%)' },
              },
            }}
            disabled={index === 0 ? true : false}
            onClick={(e) => {
              index !== 0 ? setIndex(index - 1) : setIndex(index);
            }}
          >
            <NavigateBeforeIcon
              sx={{
                fontSize: '44px',
                background: 'white',
                borderRadius: '50%',
                color: 'black',
                left: 0,
                '&:hover': {
                  color: 'hsl(26, 100%, 55%)',
                },
              }}
            />
          </IconButton>

          <img
            style={{
              width: '376px',
              marginBottom: '1rem',
            }}
            src={productImgsList[index].img}
            alt='product-img'
          />
          <IconButton
            disableRipple
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              right: 0,
              '@media screen and (max-width: 330px)': {
                right: '20px',
              },
              '&.Mui-disabled': {
                opacity: '0.6',
                '& svg': { color: 'hsl(219deg 9% 45%)' },
              },
            }}
            disabled={index < 3 ? false : true}
            onClick={() => {
              index < 3 ? setIndex(index + 1) : setIndex(index);
            }}
          >
            <NavigateNextIcon
              sx={{
                fontSize: '44px',
                background: 'white',
                borderRadius: '50%',
                color: 'black',
                '&:hover': {
                  color: 'hsl(26, 100%, 55%)',
                },
              }}
            />
          </IconButton>
        </Stack>
      ) : (
        <div>
          <img
            style={{
              width: '400px',
              marginBottom: '1rem',
              borderRadius: '15px',
            }}
            src={productImgsList[index].img}
            alt='product-img'
            onClick={handleClickOpen}
          />
          <Thumbnail
            imageList={productImgsList}
            imgIndex={index}
            setImageIndex={handleClick}
          />
          <CustomizedDialogs
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            productImgsList={productImgsList}
            imageIndex={index}
          />
        </div>
      )}
    </>
  );
};

export default ProductImg;
