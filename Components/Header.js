import { Container } from '@mui/material';
import Link from 'next/link';

export const Header = () => {
  return (
    <Container
      disableGutters
      sx={{
        position: 'fixed',
        display: 'flex',
        bottom: { xs: '1rem', md: 'auto' },
        top: { xs: 'auto', md: '1rem' },
        left: '50%',
        transform: 'translate(-50%,0 )',
        gap: '2vw',
        justifyContent: 'center',
      }}
      component={'header'}
    >
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/playground'>Playground</Link>
      <Link href='/contact'>Contact</Link>
    </Container>
  );
};
