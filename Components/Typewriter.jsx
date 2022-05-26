import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'next-i18next';

export const TypewriterEffect = () => {
  const { t } = useTranslation('home');
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: { xs: '1rem', lg: '2rem', alignItems: 'center' },
      }}
    >
      <Typography
        display='inline'
        sx={{ fontSize: 'calc(1vw + 1vh + 5vmin)', fontWeight: '700' }}
      >
        {t('first-typewriter')}
      </Typography>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(t('01-typewriter'))
            .pauseFor(1000)
            .deleteAll()
            .typeString(t('02-typewriter'))
            .pauseFor(1000)
            .deleteAll()
            .typeString(t('03-typewriter'))
            .pauseFor(1000)
            .start();
        }}
      />
    </Box>
  );
};
