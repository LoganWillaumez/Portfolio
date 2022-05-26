import { Layout } from '../Components/Layout';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Nunito Sans, sans-serif'].join(','),
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            backgroundColor: '#161C24',
            margin: 'none',
            background:
              'radial-gradient(circle, rgba(65,78,96,0.5) 0%, rgba(22,28,36,1) 100%)',
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
