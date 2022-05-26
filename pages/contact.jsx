import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import EmailSnackbar from '../Components/EmailSnackbar';
import EmailLoader from '../Components/EmailLoader';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact'])),
    },
  };
}

export default function SignInSide({ locale }) {
  const { t } = useTranslation('contact');
  // Controlled input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  // Fot the success modal
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, isLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    isLoading(true);
    emailjs
      //! test
      .sendForm(
        'service_k7is6tf',
        'template_fg0d9xo',
        form.current,
        'U_MVcIU1vGyoDpaJI'
      )
      //! Real
      // .sendForm(
      //   'service_7ci87oe',
      //   'template_5lbz616',
      //   form.current,
      //   'qXmCiz_N1lOFFnJg8'
      // )
      .then(
        (response) => {
          isLoading(false);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setOpen(true);
          setSuccess(true);
        },
        (error) => {
          isLoading(false);
          setOpen(true);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      {loading && <EmailLoader />}
      <Grid
        container
        component='main'
        sx={{
          paddingTop: '2rem',
          height: { xs: '90vh', lg: 'fit-content' },
          width: '90vw',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          marginTop: { lg: '15rem' },
          overflow: 'scroll',
          paddingTop: { xs: '2rem', lg: '0' },
          ' &::-webkit-scrollbar': {
            display: 'none',
          },
          ' &:focus': {
            display: 'none',
          },
        }}
      >
        <CssBaseline />
        {/* <Grid
        item
        xs={false}
        sm={4}
        lg={7}
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
        <Box xs={12} sm={8} lg={5} component={Paper} elevation={6} square>
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
              {t('contact-intro')}
            </Typography>
            <Box
              component='form'
              ref={form}
              noValidate
              // onSubmit={handleSubmit}
              onSubmit={sendEmail}
              sx={{
                mt: 1,
              }}
            >
              <TextField
                sx={{
                  mb: { xs: 2, lg: 2 },
                  input: {
                    '&:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 100px #333233 inset',
                      WebkitTextFillColor: '#fff',
                    },
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#808080',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#FC8B20',
                    },
                  },
                }}
                margin='normal'
                required
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                id='name'
                label={t('contact-name')}
                name='from_name'
                autoFocus
                autoComplete='name'
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <TextField
                sx={{
                  mb: { xs: 2, lg: 2 },
                  input: {
                    '&:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 100px #333233 inset',
                      WebkitTextFillColor: '#fff',
                    },
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#808080',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#FC8B20',
                    },
                  },
                }}
                margin='normal'
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                label={t('contact-email')}
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                sx={{
                  mb: { xs: 2, lg: 2 },
                  input: {
                    '&:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 100px #333233 inset',
                      WebkitTextFillColor: '#fff',
                    },
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#808080',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#FC8B20',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#FC8B20',
                    },
                  },
                }}
                margin='normal'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                id='subject'
                label={t('contact-subject')}
                name='subject'
                autoFocus
              />
              <TextField
                fullWidth
                sx={{
                  mb: { xs: 2, lg: 2 },
                  input: {
                    '&:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 100px #333233 inset',
                      WebkitTextFillColor: '#fff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#FC8B20',
                    },
                  },
                  // '& .MuiOutlinedInput-root': {
                  //   '&.Mui-focused fieldset': {
                  //     borderColor: '#FC8B20',
                  //   },
                  // },
                }}
                id='filled-multiline-static'
                label={t('contact-message')}
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
                    ':visited': {
                      bgcolor: '#FB8402',
                    },
                  }}
                >
                  {t('contact-send')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <EmailSnackbar
        setSuccess={setSuccess}
        success={success}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
