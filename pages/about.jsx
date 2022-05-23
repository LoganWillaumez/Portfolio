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
                    Adorant les métier de passions, le domaine de la 3D m'a très
                    vite conquis. Après des études dans le domaine en tant
                    qu'environnement artiste, j'ai pu trouver un travail dans
                    une boîte spécialisée dans la simulation 3D ferroviaire.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      fontSize: { lg: 'calc(0.9vw + 1vh *0.1)' },
                      fontWeight: '300',
                    }}
                  >
                    Au fil du temps, et même si la 3D continuais de me
                    passionner, je m'essayais toujours plus aux côté techniques
                    de ce métier (C# sous unity, du Vex sur Houdini,...), mais
                    je voulais pouvoir me détacher de ce milieu tout en
                    bifurquant petit à petit vers le métier de développeur.
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
                    Après plusieurs recherches, je suis donc partis vers le
                    métier de développeur web. Et ce fut le bon choix ! Partis
                    de mon travail, j'ai continué mon chemin vers l'école
                    O'clock, où j'ai appris énormément de technologies,et
                    surtout comment fonctionnait contrètement le métier de
                    développeur
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
                    Me spécialisant dans React et ses facettes, le back-end ne
                    me laisse pas dutout indiférent. Je compte bien continuer à
                    avancer dans tous les aspects du développement Web, front ou
                    back pour pouvoir, je l'espère, un jour me prétendre full
                    stack.
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
