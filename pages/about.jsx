import { Box, Container, Divider, Typography } from '@mui/material';
import CapNavigation from '../Components/CapNavigation';
import { Scene } from '../Components/Scene';
import { SceneCap } from '../Components/SceneCap';
import { Suspense, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import 'animate.css';
import { useMediaMatch } from 'rooks';
import { Loader, useProgress } from '@react-three/drei';
const About = () => {
  // Fix the problem of hydratation
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [click, setClick] = useState('3D');
  const landscape = useMediaMatch('(orientation: landscape)');
  const toggleClick = (value) => {
    setClick(value === 0 ? '3D' : 'Dev');
  };
  return (
    <>
      <Suspense fallback={null}>
        {mounted && (
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
                width: '80%',
              }}
            >
              <Typography
                sx={{
                  fontSize: 'calc(1vw + 1vh + 3vmin)',
                  fontWeight: '700',
                  marginBottom: '2vh',
                }}
              >
                From 3D to web.
              </Typography>
              <Box
                sx={{
                  height: '40vh',
                  // backgroundColor: 'red',
                  width: '90%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  maxWidth: { lg: '800px', xl: '1000px' },
                }}
              >
                <Box
                  sx={{
                    height: '28vh',
                    overflowY: 'scroll',
                    gap: '1rem',
                    zIndex: '5',
                    float: 'left',
                    ...(click === '3D'
                      ? {
                          animation: 'fadeIn',
                          animationDuration: '1s',
                          animationFillMode: 'forwards',
                          display: 'block',
                        }
                      : {
                          animation: 'fadeOut',
                          animationDuration: '1s',
                          animationFillMode: 'forwards',
                          display: 'none',
                        }),
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      marginBottom: '1rem',
                      fontSize: { lg: 'calc(0.9vw + 1vh *0.1)' },
                      fontWeight: '300',
                    }}
                  >
                    My love for the profession of passions lead me to the field
                    of 3D. After studying as an artist environment, I was able
                    to find a job at a company specializing in 3D railway
                    simulations.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      fontSize: { lg: 'calc(0.9vw + 1vh *0.1)' },
                      fontWeight: '300',
                    }}
                  >
                    Event though I continued to be fascinated by 3D, I also
                    tried my hands at the technical side of this profession(C#
                    under Unity, Vex,...) but It was not enough, and I became
                    more and more passionate about web development as I
                    discovered it.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: '28vh',
                    overflow: 'scroll',
                    display: 'flex',
                    flexDirection: 'column',
                    float: 'left',
                    gap: '1rem',
                    opacity: '0',
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    ...(click === 'Dev'
                      ? {
                          display: 'block',
                          animation: 'fadeIn',
                          animationDuration: '1s',
                          animationFillMode: 'forwards',
                        }
                      : {
                          animation: 'fadeOut',
                          animationDuration: '1s',
                          animationFillMode: 'forwards',
                          display: 'none',
                        }),
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      marginBottom: '1rem',
                      fontSize: { lg: 'calc(0.9vw + 1vh *0.1)' },
                      fontWeight: '300',
                    }}
                  >
                    After considering it for a while, I decided to quit my job
                    and pursue my passion. And it was the right decision ! Then
                    continued my way to the O'clock school, where I learned the
                    foundations of the web development field. It was a rewarding
                    experience that comforted me in my decision.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      fontSize: {
                        lg: 'calc(0.9vw + 1vh * 0.1)',
                        fontWeight: '300',
                      },
                    }}
                  >
                    Although I specialise in React and its facets, the back-end
                    does not leave me uninterested. I intend to advance in all
                    aspects of web development, front and back, to one day be
                    able to claim to be a full stack developer..
                  </Typography>
                </Box>
              </Box>
              {/* <Divider /> */}
              {/* <Typography
          sx={{
            fontSize: 'calc(1vw + 1vh + 1vmin)',
          }}
        >
          Let's combine the two world together.
        </Typography> */}
            </Box>
            <SceneCap active={active} />
          </Container>
        )}
      </Suspense>
      <CapNavigation
        toggleClick={toggleClick}
        active={active}
        setActive={setActive}
      />
      {/* <IconButton
        sx={{
          position: 'fixed',
          left: '5vw',
          bottom: '35vh',
        }}
      >
        <ArrowBackIosIcon
          sx={{
            position: 'fixed',
            left: '5vw',
            bottom: '35vh',
            fontSize: 'calc(1vw + 1vh + 5vmin)',
          }}
        />
      </IconButton>
      <IconButton
        sx={{
          position: 'fixed',
          right: '5vw',
          bottom: '35vh',
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: 'calc(1vw + 1vh + 5vmin)',
          }}
        />
      </IconButton> */}
    </>
  );
};
export default About;
