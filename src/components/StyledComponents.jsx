import { Box, styled } from '@mui/system';
import { useHistory } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';

export const MenuButton = styled((props) => {
  const history = useHistory();
  const matches = useMediaQuery('(max-width:770px)');
  const { setIsOpen, handelChecked, productState, children, link, ...others } =
    props;
  return (
    <button
      onClick={() => {
        matches && handelChecked();
        setIsOpen(false);
        history.push({ pathname: `/${link}`, state: productState });
      }}
      {...others}
    >
      {children}
    </button>
  );
})(({ theme }) => ({
  color: '#68707d',
  background: 'transparent',
  border: 'none',
  padding: '3rem 1rem',
  fontFamily: "'Kumbh Sans', sans-serif",
  fontSize: '16px',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  '&:hover': {
    borderBottom: '3px solid hsl(26, 100%, 55%)',
    marginBottom: '-3px',
    color: 'black',
  },
  [theme.breakpoints.down(770)]: {
    padding: '0.5rem 2rem',
    '&:hover': {
      border: 0,
      marginBottom: 0,
    },
  },
}));

export const ThumbnailImage = styled((props) => {
  const { src, alt, ...others } = props;
  return <img src={src} alt={alt} {...others} />;
})({
  width: 'calc(320px/4)',
  margin: '10px',
  borderRadius: '15px',
  '&:first-child': {
    marginLeft: '0',
  },
  '&:last-child': {
    marginRight: '0',
  },
  '&:hover': {
    opacity: '0.5',
  },
  '&.active-thumbnail': {
    border: '4px solid hsl(26, 100%, 55%)',
    margin: '6px',
    opacity: '0.5',
    '&:first-child': {
      marginLeft: '-4px',
    },
    '&:last-child': {
      marginRight: '-4px',
    },
  },
});

export const LightThumbnailImage = styled((props) => {
  const { src, alt, active, margin, className, ...others } = props;
  return (
    <>
      <Box className={className}>
        <img src={src} alt={alt} {...others} />
      </Box>
    </>
  );
})(({ margin }) => ({
  position: 'relative',
  display: 'inline-flex',
  borderRadius: '15px',
  overflow: 'hidden',
  cursor: 'pointer',
  margin: margin || 0,
  '&::after': {
    content: "''",
    position: 'absolute',
    background: 'white',
    opacity: 1,
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    zIndex: '-1',
  },
  '&.active-thumbnail': {
    boxShadow: '0 0 0 2px #ff7d1a',
    '& img': {
      opacity: '0.5',
    },
  },
  '& img': {
    width: 'calc(300px/4)',
    borderRadius: '15px',
    '&:hover': {
      opacity: '0.5',
    },
    '&.active-thumbnail': {
      opacity: '0.5',
    },
  },
}));
