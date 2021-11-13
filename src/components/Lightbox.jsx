import { Dialog, DialogTitle, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Thumbnail from './Thumbnail';
import { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiIconButton-root:hover': {
    backgroundColor: 'transparent',
    color: 'hsl(26, 100%, 55%)',
  },
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            padding: '8px 0 0',
            right: '58px',
            top: '-2px',
            color: 'white',
          }}
        >
          <CloseIcon style={{ fontSize: '1.3rem' }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs({
  handleClickOpen,
  handleClose,
  open,
  productImgsList,
  imageIndex,
}) {
  const [index, setIndex] = useState(imageIndex);
  const handleClick = (newIndex) => setIndex(newIndex);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ position: 'relative' }}
        >
          <IconButton
            disableRipple
            sx={{
              cursor: 'pointer',
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
                position: 'relative',
                fontSize: '44px',
                background: 'hsl(26, 100%, 60%)',
                borderRadius: '50%',
                color: 'black',
                left: '1.5rem',
                '&:hover': {
                  color: 'white',
                },
              }}
            />
          </IconButton>

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
          <IconButton
            disableRipple
            sx={{
              cursor: 'pointer',
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
                position: 'relative',
                fontSize: '44px',
                background: 'hsl(26, 100%, 60%)',
                borderRadius: '50%',
                color: 'black',
                right: '1.5rem',
                '&:hover': {
                  color: 'white',
                },
              }}
            />
          </IconButton>
        </Stack>
        <Thumbnail
          imageList={productImgsList}
          imgIndex={index}
          setImageIndex={handleClick}
          justifyContent='center'
          margin='1rem'
        />
      </BootstrapDialog>
    </div>
  );
}
