import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TypewriterEffect } from '../Components/Typewriter';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
export default function App() {
  const router = useRouter();
  return (
    <Container
      maxWidth={false}
      disableGutters
      component={motion.div}
      // initial={{ opacity: 0, x: 100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: -100 }}
      // transition={{ duration: 1 }}
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        maxWidth: '1400px !important',
      }}
    >
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' component='h2'>
          Hey there ! I'm {''}
          <Typography
            display={'inline'}
            sx={{ color: '#FB8402', fontWeight: '600', fontSize: '2.5rem' }}
          >
            Logan
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: 'calc(1vw + 1vh + 5vmin)',
            // marginBottom: '4vh',
          }}
          variant='h1'
          component='h1'
        >
          <TypewriterEffect />
        </Typography>
        <Typography sx={{ fontWeight: '700' }} variant='h6' component='h3'>
          Passion above all
        </Typography>
        <Typography
          sx={{
            fontWeight: '300',
            maxWidth: { xs: '50vh', md: '600px', marginBottom: '4vh' },
          }}
          component='p'
        >
          After discovering the world of 3D, my passion lead me now to the world
          of web development.
        </Typography>
        <Box sx={{ display: 'flex', gap: '2vh' }}>
          <Button
            sx={{ bgcolor: '#FB8402', color: 'white', fontWeight: '700' }}
            variant='contained'
            onClick={() => {
              router.push('/contact');
            }}
          >
            Contact me
          </Button>
          <Button
            target={'_blank'}
            href={'/files/cv_LoganWillaumez.pdf'}
            sx={{
              bgcolor: '#FB8402',
              color: 'white',
              fontWeight: '700',
              ':focus': {
                bgcolor: '#FB8402',
              },
            }}
            variant='contained'
          >
            Get CV
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
