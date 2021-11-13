import {
  AppBar,
  Avatar,
  Button,
  Collapse,
  Paper,
  Stack,
  Toolbar,
  Typography,
  Zoom,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartList from './CartList';
import { MenuButton } from './StyledComponents';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useHistory } from 'react-router';

const NavBar = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setAvatarIsOpen(false);
    setIsOpen(!isOpen);
  };
  const [avatarIsOpen, setAvatarIsOpen] = useState(false);
  const handleAvatarClick = () => {
    setIsOpen(false);
    setAvatarIsOpen(!avatarIsOpen);
  };
  const [checked, setChecked] = useState(false);
  const matches = useMediaQuery('(max-width:770px)');
  const quantity = useSelector((state) => state.cart.value.length);
  const handelChecked = () => setChecked(!checked);
  const icon = (
    <Paper elevation={4}>
      <Box
        sx={{
          width: '300px',
          height: '100vh',
        }}
      >
        <img
          onClick={handelChecked}
          style={{ padding: '2rem' }}
          src='/images/icon-close.svg'
          alt='close-img'
        />
        <Stack direction='column' alignItems='flex-start'>
          <MenuButton
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            link=''
          >
            Collection
          </MenuButton>
          <MenuButton
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            link='men'
          >
            Men
          </MenuButton>
          <MenuButton
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            link='woman'
          >
            Women
          </MenuButton>
          <MenuButton
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            link='about'
          >
            About
          </MenuButton>
          <MenuButton
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            link='contact'
          >
            Contact
          </MenuButton>
          <MenuButton
            sx={{ fontWeight: '700' }}
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            onClick={() => {
              matches && handelChecked();
              setIsOpen(false);
              history.push('/sign-in');
            }}
          >
            Sign In
          </MenuButton>
          <MenuButton
            sx={{ fontWeight: '700' }}
            setIsOpen={setIsOpen}
            handelChecked={handelChecked}
            onClick={() => {
              matches && handelChecked();
              setIsOpen(false);
              history.push('/sign-up');
            }}
          >
            Sign Up
          </MenuButton>
        </Stack>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <AppBar
        position='relative'
        elevation={0}
        sx={{
          background: 'transparent',
        }}
      >
        {matches ? (
          <>
            <Toolbar
              sx={{
                borderBottom: '1px solid hsl(220, 14%, 75%)',
                alignItem: 'flex-start',
                paddingBottom: '3px',
              }}
            >
              <img
                onClick={() => {
                  setIsOpen(false);
                  handelChecked();
                }}
                style={{
                  padding: '1rem 1rem 0.6rem',
                  paddingRight: '1.3rem',
                  cursor: 'pointer',
                }}
                src='/images/icon-menu.svg'
                alt='ham-menu-img'
              />
              <img src='/images/logo.svg' alt='logo-img' />
              {isLoggedIn ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    '& > img': {
                      padding: '1rem',
                    },
                  }}
                >
                  <img
                    onClick={handleClick}
                    src='/images/icon-cart.svg'
                    alt='cart-img'
                  />
                  <Typography
                    sx={{
                      background: 'hsl(26, 100%, 55%)',
                      position: 'absolute',
                      right: '6.2rem',
                      borderRadius: '50px',
                      top: '0.7rem',
                      width: '26px',
                      textAlign: 'center',
                      color: 'white',
                      '@media screen and (max-width: 426px)': {
                        right: '5.6rem',
                        top: '0.7rem',
                      },
                    }}
                  >
                    {quantity}
                  </Typography>
                  <Avatar
                    onClick={handleAvatarClick}
                    sx={{
                      padding: '1rem',
                      '.MuiAvatar-img': {
                        borderRadius: '50px',
                        '&:hover': { border: '2px solid hsl(26, 100%, 55%)' },
                      },
                    }}
                    src='/images/image-avatar.png'
                    alt='profile-img'
                  />
                  <Zoom
                    in={avatarIsOpen}
                    style={{
                      transformOrigin: '40px -10px',
                      zIndex: '5',
                    }}
                  >
                    <Paper
                      elevation={12}
                      sx={{
                        position: 'absolute',
                        top: '4rem',
                        right: '10px',
                        '@media screen and (max-width: 361px)': {
                          right: '12px',
                        },
                      }}
                    >
                      <Stack
                        justifyContent='center'
                        sx={{
                          borderBottom: '1px solid hsl(220, 14%, 75%)',
                          height: '3rem',
                          zIndex: '4',
                          fontWeight: '700',
                        }}
                      >
                        <Button
                          onClick={() => {
                            setIsLoggedIn(false);
                            history.push('/');
                          }}
                        >
                          Logout
                        </Button>
                      </Stack>
                    </Paper>
                  </Zoom>
                  <Zoom
                    in={isOpen}
                    style={{
                      transformOrigin: '280px -30px',
                      '@media screen and (max-width: 361px)': {
                        transformOrigin: '200px -30px',
                      },
                    }}
                  >
                    <Paper
                      elevation={12}
                      sx={{
                        position: 'absolute',
                        zIndex: '4',
                        top: '6rem',
                        right: '3%',
                        minWidth: '350px',
                        '@media screen and (max-width: 361px)': {
                          minWidth: '340px',
                          right: 0,
                          left: 0,
                        },
                      }}
                    >
                      <Stack
                        justifyContent='center'
                        sx={{
                          borderBottom: '1px solid hsl(220, 14%, 75%)',
                          height: '3rem',
                          paddingLeft: '1rem',
                          fontWeight: '700',
                        }}
                      >
                        Cart
                      </Stack>
                      {quantity === 0 ? (
                        <Stack
                          justifyContent='center'
                          alignItems='center'
                          sx={{
                            height: '10rem',
                            fontWeight: '700',
                            color: 'hsl(219, 9%, 45%)',
                          }}
                        >
                          Your cart is empty
                        </Stack>
                      ) : (
                        <Stack
                          justifyContent='flex-start'
                          alignItems='center'
                          sx={{
                            fontWeight: '700',
                            color: 'hsl(219, 9%, 45%)',
                          }}
                        >
                          <CartList setIsOpen={setIsOpen} />
                        </Stack>
                      )}
                    </Paper>
                  </Zoom>
                </Box>
              ) : null}
            </Toolbar>

            <Collapse
              sx={{ position: 'absolute', top: 0, zIndex: '4' }}
              orientation='horizontal'
              in={checked}
              timeout={1000}
            >
              {icon}
            </Collapse>
          </>
        ) : (
          <Toolbar
            sx={{
              marginTop: '1rem',
              borderBottom: '1px solid hsl(220, 14%, 75%)',
              alignItem: 'flex-start',
              paddingBottom: '3px',
            }}
          >
            <img src='/images/logo.svg' alt='logo-img' />
            <div className='menu'>
              <MenuButton setIsOpen={setIsOpen} link=''>
                Collection
              </MenuButton>
              <MenuButton setIsOpen={setIsOpen} link='men'>
                Men
              </MenuButton>
              <MenuButton setIsOpen={setIsOpen} link='woman'>
                Women
              </MenuButton>
              <MenuButton setIsOpen={setIsOpen} link='about'>
                About
              </MenuButton>
              <MenuButton setIsOpen={setIsOpen} link='contact'>
                Contact
              </MenuButton>
            </div>
            {isLoggedIn ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 'auto',
                  '& > img': {
                    padding: '1rem',
                  },
                }}
              >
                <img
                  onClick={handleClick}
                  src='/images/icon-cart.svg'
                  alt='cart-img'
                />
                <Typography
                  sx={{
                    background: 'hsl(26, 100%, 55%)',
                    position: 'absolute',
                    right: '6.2rem',
                    borderRadius: '50px',
                    top: '2.2rem',
                    width: '26px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  {quantity}
                </Typography>
                <Avatar
                  onClick={handleAvatarClick}
                  sx={{
                    padding: '1rem',
                    '.MuiAvatar-img': {
                      borderRadius: '50px',
                      '&:hover': { border: '2px solid hsl(26, 100%, 55%)' },
                    },
                  }}
                  src='/images/image-avatar.png'
                  alt='profile-img'
                />
                <Zoom
                  in={avatarIsOpen}
                  style={{
                    transformOrigin: '45px -15px',
                    zIndex: '5',
                    position: 'absolute',
                    top: '6rem',
                    right: '10px',
                  }}
                >
                  <Paper elevation={12} sx={{}}>
                    <Stack
                      justifyContent='center'
                      sx={{
                        borderBottom: '1px solid hsl(220, 14%, 75%)',
                        height: '3rem',
                        zIndex: '4',
                        fontWeight: '700',
                      }}
                    >
                      <Button
                        onClick={() => {
                          setIsLoggedIn(false);
                          history.push('/');
                        }}
                      >
                        Logout
                      </Button>
                    </Stack>
                  </Paper>
                </Zoom>
                <Zoom
                  in={isOpen}
                  style={{ transformOrigin: '170px -15px', zIndex: '5' }}
                >
                  <Paper
                    elevation={12}
                    sx={{
                      position: 'absolute',
                      top: '6rem',
                      right: '10px',
                      minWidth: '350px',
                    }}
                  >
                    <Stack
                      justifyContent='center'
                      sx={{
                        borderBottom: '1px solid hsl(220, 14%, 75%)',
                        height: '3rem',
                        zIndex: '4',
                        paddingLeft: '1rem',
                        fontWeight: '700',
                      }}
                    >
                      Cart
                    </Stack>
                    {quantity === 0 ? (
                      <Stack
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                          height: '10rem',
                          fontWeight: '700',
                          color: 'hsl(219, 9%, 45%)',
                        }}
                      >
                        Your cart is empty
                      </Stack>
                    ) : (
                      <Stack
                        justifyContent='flex-start'
                        alignItems='center'
                        sx={{
                          fontWeight: '700',
                          color: 'hsl(219, 9%, 45%)',
                        }}
                      >
                        <CartList setIsOpen={setIsOpen} />
                      </Stack>
                    )}
                  </Paper>
                </Zoom>
              </Box>
            ) : (
              <Box sx={{ marginLeft: 'auto', marginTop: '5px' }}>
                <MenuButton
                  sx={{ fontWeight: '700' }}
                  onClick={() => {
                    matches && handelChecked();
                    setIsOpen(false);
                    history.push('/sign-in');
                  }}
                >
                  Sign In
                </MenuButton>
                <MenuButton
                  sx={{ fontWeight: '700' }}
                  onClick={() => {
                    matches && handelChecked();
                    setIsOpen(false);
                    history.push('/sign-up');
                  }}
                >
                  Sign Up
                </MenuButton>
              </Box>
            )}
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
};

export default NavBar;
