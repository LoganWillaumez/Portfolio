import { Container } from '@mui/material';
import Link from 'next/link';
import Linkmui from '@mui/material/Link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const Header = () => {
  const { pathname, locale } = useRouter();
  return (
    <>
      <Head>
        <title>Logan Willaumez Portfolio</title>
        <meta
          name='description'
          content={
            locale === 'en'
              ? 'A portfolio of a frond-end developer residing in Moselle looking for a job.'
              : "Un portfolio d'un front-end développeur résidant en Moselle en recherche d'un emploi"
          }
        ></meta>
        <meta
          property='og:image'
          content='https://github.com/LoganWillaumez/Portfolio'
        />
      </Head>

      <Container
        disableGutters
        sx={{
          position: 'fixed',
          display: 'flex',
          bottom: '0',
          top: { xs: 'auto', lg: '1rem' },
          left: '50%',
          transform: 'translate(-50%,0 )',
          gap: '4vw',
          justifyContent: 'center',
          zIndex: '5',
          height: '5%',
          '@media (orientation : landscape)': {},
        }}
        component={'header'}
      >
        <Link href='/' passHref>
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
        <Link href='/about' passHref>
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
        <Link href='/portfolio' passHref>
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
            Portfolio
          </Linkmui>
        </Link>
        <Link href='/contact' passHref>
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
