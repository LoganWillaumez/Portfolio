import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

export const TypewriterEffect = () => {
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
        A
      </Typography>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('front-end developer')
            .pauseFor(1000)
            .deleteAll()
            .typeString('React specialist')
            .pauseFor(1000)
            .deleteAll()
            .typeString('3D lover')
            .pauseFor(1000)
            .start();
        }}
      />
    </Box>
  );
};
