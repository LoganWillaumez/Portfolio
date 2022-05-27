import { Box, Button } from '@mui/material';
import { Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useRouter } from 'next/router';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export const MenuSocial = ({ open, openTrue, openFalse }) => {
  const { locale } = useRouter();
  const router = useRouter();
  /**
   * Change language of the site (toggle)
   */
  const changeLanguageHandler = () => {
    router.push(router.asPath, undefined, {
      locale: locale === 'en' ? 'fr' : 'en',
    });
  };
  return (
    <>
      <ClickAwayListener onClickAway={openFalse}>
        <Box>
          <Paper
            component={Paper}
            onClick={() => openTrue()}
            sx={{
              width: '80px',
              height: '300px',
              position: 'fixed',
              left: { xs: '-40px', lg: '-5px' }, //-5 ok
              top: { xs: '15%', lg: '40%' },
              transform: 'translate(0, -50%)',
              backgroundColor: '#FB8402',
              zIndex: '100',
              overflow: 'hidden',
              transition: 'all 250ms ease-in-out',
              transformOrigin: 'left top',
              transform: { xs: 'scaleY(0.2)', lg: 'scaleY(1)' },
              ...(open && {
                transform: { xs: 'scale(1)' },
                transform: { xs: 'translateX(35px)', lg: 'translateX(0)' },
              }),
            }}
          >
            <Box
              height={'100%'}
              sx={{
                padding: '0rem 0 0rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: { xs: '0', lg: '1' },
                transform: { xs: 'scale(0)', lg: 'scale(1)' },
                transition: 'all 250ms east-in-out',
                ...(open && {
                  opacity: '1',
                  transform: 'scale(1)',
                }),
              }}
            >
              <a
                style={{ color: 'white' }}
                href='https://github.com/LoganWillaumez'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='link for my github'
              >
                <GitHubIcon />
              </a>
              <a
                style={{ color: 'white' }}
                href='https://www.linkedin.com/in/loganwillaumez/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='link for my linkedin'
              >
                <LinkedInIcon />
              </a>
              <a
                style={{ color: 'white' }}
                href='mailto:logan.willaumez@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='link for my email'
              >
                <EmailIcon />
              </a>
              <a
                style={{ color: 'white' }}
                href='tel:0033764267034'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='link for my phone number'
              >
                <PhoneIphoneIcon />
              </a>
              <Button
                type='button'
                onClick={() => changeLanguageHandler()}
                sx={{ padding: '0', color: 'white', fontWeight: '700' }}
                variant='text'
              >
                {locale === 'en' ? 'fr' : 'en'}
              </Button>
            </Box>
          </Paper>
          <Box
            onClick={() => openTrue()}
            sx={{
              position: 'fixed',
              left: { xs: '-20px', lg: '-5px' },
              top: { xs: '15%', lg: '40%' },
              width: '80px',
              height: '20px',
              zIndex: '105',
              transition: 'all 150ms ease-in-out',
              opacity: { sx: '1', lg: '0' },
              ...(open && {
                opacity: '0',
                transform: 'translateX(20px)',
              }),
            }}
          >
            <ArrowRightIcon
              sx={{
                position: 'fixed',
                width: '80px',
                height: '40px',
                transform: 'translateY(10px)',
                zIndex: '105',
              }}
            />
          </Box>
        </Box>
      </ClickAwayListener>
    </>
  );
};
