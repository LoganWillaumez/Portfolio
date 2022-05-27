import { Box, Container, Divider, Typography } from '@mui/material';
import CapNavigation from '../Components/CapNavigation';
import { SceneCap } from '../Components/SceneCap';
import { Suspense, useEffect, useState } from 'react';
import 'animate.css';
import { useMediaMatch } from 'rooks';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  };
}

const About = () => {
  const { t } = useTranslation('about');
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
                {t('about-title')}
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
                    overflowY: 'auto',
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
                      // display: 'none',
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
                    {t('about-3d-1')}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      fontSize: { lg: 'calc(0.9vw + 1vh *0.1)' },
                      fontWeight: '300',
                    }}
                  >
                    {t('about-3d-2')}
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
                    {t('about-web-1')}
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
                    {t('about-web-2')}
                  </Typography>
                </Box>
              </Box>
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
    </>
  );
};
export default About;
