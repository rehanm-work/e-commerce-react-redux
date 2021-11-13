import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Contact = () => {
  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          margin: '2rem auto',
          background: '#f9f9f9',
          padding: '2rem',
          width: '80%',
        }}
      >
        <Box
          component='img'
          sx={{
            width: '40%',
            marginBottom: '2rem',
            opacity: '0.9',
            '@media screen and (max-width: 770px)': { width: '100%' },
          }}
          src='https://th.bing.com/th/id/R.608d7b896d0f87cad3eef6185db529fe?rik=4xogG21Ch7E3tA&riu=http%3a%2f%2famzftw.com%2fwp-content%2fuploads%2f2016%2f06%2fold-fashioned-phone.png&ehk=gY2s5QcgdXOE1T4QjoX539HZLZ%2fnXpoPNAjwjbsvQVs%3d&risl=&pid=ImgRaw&r=0'
          alt='contact-img'
        />
        <Box
          sx={{
            backgroundImage:
              'linear-gradient(126deg, hsl(26, 100%, 45%) 30%, hsl(219, 9%, 45%))',
            width: '75%',
            padding: '2rem',
            color: 'white',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              backgroundImage:
                'linear-gradient(0deg, hsl(26, 100%, 45%), hsl(223, 64%, 98%) 73%)',
              color: 'black',
              display: 'inline-block',
              borderRadius: '16px 16px 0 0',
              padding: '1rem',
              '@media screen and (max-width: 1025px)': {
                padding: 0,
                backgroundImage: 'none',
                fontSize: '1.4rem',
                fontWeight: '700',
              },
            }}
          >
            Contact Information
          </Typography>
          <Stack sx={{ margin: '1rem 0', '& > h5': { fontWeight: '700' } }}>
            <Typography variant='h5'>Address</Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
              1270 McVaney Road, <br />
              Asheville, <br />
              North Carolina - 28801
            </Typography>
            <Typography variant='h5'>Mobile</Typography>
            <Typography>828-713-2195</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Contact;
