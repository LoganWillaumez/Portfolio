import { Container } from '@mui/material';
import Link from 'next/link';
import Linkmui from '@mui/material/Link';
import { useRouter } from 'next/router';
import Head from 'next/head';
export const Header = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Logan Willaumez Portfolio</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </Head>

      <Container
        disableGutters
        sx={{
          position: 'fixed',
          display: 'flex',
          bottom: { xs: '1rem', lg: 'auto' },
          top: { xs: 'auto', lg: '1rem' },
          left: '50%',
          transform: 'translate(-50%,0 )',
          gap: '4vw',
          justifyContent: 'center',
        }}
        component={'header'}
      >
        <Link href='/'>
          <Linkmui
            underline={pathname === '/' ? 'always' : 'none'}
            sx={{
              fontWeight: '700',
              color: 'white',
              transition: 'all 250ms ease-in-out',
              ...(pathname === '/' && {
                color: '#FB8402',
                transform: {
                  xs: 'translateY(-0.5rem)',
                  lg: 'translateY(0.5rem)',
                },
              }),
            }}
          >
            Home
          </Linkmui>
        </Link>
        <Link href='/about'>
          <Linkmui
            underline={pathname === '/about' ? 'always' : 'none'}
            sx={{
              fontWeight: '700',
              color: 'white',
              transition: 'all 250ms ease-in-out',
              ...(pathname === '/about' && {
                color: '#FB8402',
                transform: {
                  xs: 'translateY(-0.5rem)',
                  lg: 'translateY(0.5rem)',
                },
              }),
            }}
          >
            About
          </Linkmui>
        </Link>
        <Link href='/playground'>
          <Linkmui
            underline={pathname === '/playground' ? 'always' : 'none'}
            sx={{
              fontWeight: '700',
              color: 'white',
              transition: 'all 250ms ease-in-out',
              ...(pathname === '/playground' && {
                color: '#FB8402',
                transform: {
                  xs: 'translateY(-0.5rem)',
                  lg: 'translateY(0.5rem)',
                },
              }),
            }}
          >
            Playground
          </Linkmui>
        </Link>
        <Link href='/contact'>
          <Linkmui
            underline={pathname === '/contact' ? 'always' : 'none'}
            sx={{
              fontWeight: '700',
              color: 'white',
              transition: 'all 250ms ease-in-out',
              ...(pathname === '/contact' && {
                color: '#FB8402',
                transform: {
                  xs: 'translateY(-0.5rem)',
                  lg: 'translateY(0.5rem)',
                },
              }),
            }}
          >
            Contact
          </Linkmui>
        </Link>
      </Container>
    </>
  );
};
