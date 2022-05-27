import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TypewriterEffect } from '../Components/Typewriter';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}
export default function App({ locale }) {
  const router = useRouter();
  const { t } = useTranslation('home');

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
        display: 'flex',
        textAlign: 'left',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        maxWidth: '1400px !important',
        // padding: '5rem',
        paddingLeft: { lg: '5rem' },
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
        <Typography variant='h4' component='h1'>
          {t('firstMessage')}
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
          component='h2'
        >
          <TypewriterEffect />
        </Typography>
        <Typography sx={{ fontWeight: '700' }} variant='h6' component='h3'>
          {t('subtitle')}
        </Typography>
        <Typography
          sx={{
            fontWeight: '300',
            maxWidth: { xs: '50vh', lg: '600px', marginBottom: '4vh' },
          }}
          component='p'
        >
          {t('subtitle-text')}
        </Typography>
        <Box sx={{ display: 'flex', gap: '2vh' }}>
          <Button
            sx={{
              bgcolor: '#FB8402',
              color: 'white',
              fontWeight: '700',
            }}
            variant='contained'
            onClick={() => {
              router.push('/contact');
            }}
          >
            {t('button-contact')}
          </Button>
          <Button
            target={'_blank'}
            href={'/files/cv-LoganWillaumez.pdf'}
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
            {t('button-cv')}
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
