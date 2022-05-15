import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid
      container
      component='main'
      sx={{
        paddingTop: '2rem',
        height: { xs: '90vh', md: 'fit-content' },
        width: '90vw',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        marginTop: { md: '15rem' },
        overflow: 'scroll',
        paddingTop: { xs: '2rem', md: '0' },
        ' &::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <CssBaseline />
      {/* <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Coucou
      </Grid> */}
      <Box item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FB8402', color: 'white' }}>
            <EmailIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Feel free to contact me !
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
            }}
          >
            <TextField
              sx={{ mb: { xs: 2, md: 2 } }}
              margin='normal'
              required
              fullWidth
              id='name'
              label='Your name'
              name='name'
              autoComplete='name'
              autoFocus
            />
            <TextField
              sx={{ mb: { xs: 2, md: 2 } }}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              sx={{ mb: { xs: 2, md: 2 } }}
              margin='normal'
              required
              fullWidth
              id='subject'
              label='Your Subject'
              name='subject'
              autoFocus
            />
            <TextField
              fullWidth
              sx={{ mb: { xs: 2, md: 5 } }}
              id='filled-multiline-static'
              label='Your message'
              multiline
              rows={6}
              variant='filled'
            />
            <Box fullWidth sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  width: '100%',
                  bgcolor: '#FB8402',
                  mb: 3,
                  mt: 2,
                  width: '150px',
                  color: 'white',
                  fontWeight: '700',
                  ':focus': {
                    bgcolor: '#FB8402',
                  },
                }}
              >
                Send e-mail
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
