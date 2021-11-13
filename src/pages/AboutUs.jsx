import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutUs = () => {
  const matches = useMediaQuery('(max-width:770px)');
  return (
    <>
      {matches ? (
        <Stack
          direction='column'
          alignItems='center'
          sx={{
            position: 'relative',
            margin: '2rem',
            padding: '1rem 2rem 3rem',
            background: 'hsl(223, 64%, 98%)',
          }}
        >
          <Box
            sx={{
              maxWidth: '700px',
              zIndex: '3',
            }}
          >
            <Typography
              variant='h4'
              color='primary'
              sx={{
                textAlign: 'center',
                margin: '2rem auto',
                textShadow: '0px 1px 7px hsl(26deg 100% 72%)',
                cursor: 'pointer',
                transition: '1s ease-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            >
              Who We Are
            </Typography>
            <Typography
              sx={{
                fontSize: '1.4rem',
                fontWeight: '400',
                textShadow: '3px 2px 5px hsl(219deg 9% 45%)',
                textAlign: 'center',
              }}
            >
              Sneakers is guided by four principles: customer obsession rather
              than competitor focus, passion for invention, commitment to
              operational excellence, and long-term thinking. Sneakers strives
              to be Earth’s most customer-centric company, Earth’s best
              employer, and Earth’s safest place to work.
            </Typography>
          </Box>
        </Stack>
      ) : (
        <Stack
          direction='column'
          alignItems='center'
          sx={{
            position: 'relative',
            margin: '2rem auto',
            '&::after': {
              content: '""',
              width: '90%',
              position: 'absolute',
              top: '0',
              height: '100%',
              backgroundImage:
                'linear-gradient(120deg, hsl(26, 100%, 55%), hsl(220, 13%, 13%))',
              opacity: '.7',
              zIndex: '1',
              transition: '1s ease',
            },
            '&:hover::after': {
              opacity: '.4',
            },
          }}
        >
          <Box
            component='img'
            sx={{
              width: '90%',
              boxShadow: '0px 0px 20px 20px hsl(26, 100%, 70%)',
              transition: '1s ease',
            }}
            src='/images/about.jpg'
            alt='sneaker-img'
          />
          <Box
            sx={{
              position: 'absolute',
              maxWidth: '700px',
              top: '25%',
              bottom: '20%',
              zIndex: '3',
            }}
          >
            <Typography
              variant='h4'
              color='primary'
              sx={{
                textAlign: 'center',
                margin: '2rem auto',
                textShadow: '0px 1px 7px hsl(26deg 100% 72%)',
                cursor: 'pointer',
                transition: '1s ease-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            >
              Who We Are
            </Typography>
            <Typography
              variant='p'
              sx={{
                fontSize: '2rem',
                fontWeight: '700',
                textShadow: '3px 2px 5px hsl(219deg 9% 45%)',
              }}
            >
              Sneakers is guided by four principles: customer obsession rather
              than competitor focus, passion for invention, commitment to
              operational excellence, and long-term thinking. Sneakers strives
              to be Earth’s most customer-centric company, Earth’s best
              employer, and Earth’s safest place to work.
            </Typography>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default AboutUs;
