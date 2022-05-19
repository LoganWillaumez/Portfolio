import { Box, Container, Typography } from '@mui/material';
import CapNavigation from '../Components/CapNavigation';
import { Scene } from '../Components/Scene';
import { SceneCap } from '../Components/SceneCap';
const About = () => {
  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ height: '92%' }}>
        <Box
          prepend
          as='div'
          fullscreen
          sx={{
            position: 'fixed',
            top: { xs: '2rem', lg: '4rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            left: '50%',
            zIndex: '10',
            transform: 'translateX(-50%)',
          }}
        >
          <Typography
            sx={{
              fontSize: 'calc(1vw + 1vh + 3vmin)',
              fontWeight: '700',
              marginBottom: '5vh',
            }}
          >
            From 3D to web.
          </Typography>
          <CapNavigation />
          {/* <Typography
          sx={{
            fontSize: 'calc(1vw + 1vh + 1vmin)',
          }}
        >
          Let's combine the two world together.
        </Typography> */}
        </Box>
        <SceneCap />
      </Container>
      {/* <Box
        sx={{
          backgroundColor: 'red',
          position: 'fixed',
          width: '100%',
          bottom: '4rem',
          left: '0',
        }}
      ></Box> */}
    </>
  );
};
export default About;
