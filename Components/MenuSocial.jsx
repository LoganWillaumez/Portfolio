import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ListIcon from '@mui/icons-material/List';
export const MenuSocial = ({ open, openTrue, openFalse }) => {
  return (
    <>
      <ClickAwayListener onClickAway={openFalse}>
        <Paper
          component={Paper}
          onClick={() => openTrue()}
          sx={{
            width: '80px',
            height: '250px',
            position: 'fixed',
            left: { xs: '-40px', lg: '-5px' }, //-5 ok
            top: { xs: '15%', lg: '40%' },
            transform: 'translate(0, -50%)',
            backgroundColor: '#FB8402',
            zIndex: '10',
            overflow: 'hidden',
            transition: 'all 250ms ease-in-out',
            transformOrigin: 'left top',
            transform: { xs: 'scaleY(0.2)', lg: 'scaleY(1)' },
            ...(open && {
              transform: 'scale(1)',
              transform: 'translateX(35px)',
            }),
          }}
        >
          <Box
            height={'100%'}
            sx={{
              padding: '2rem 0 2rem 0',
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
            >
              <GitHubIcon />
            </a>
            <a
              style={{ color: 'white' }}
              href='https://www.linkedin.com/in/loganwillaumez/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon />
            </a>
            <a
              style={{ color: 'white' }}
              href='mailto:logan.willaumez@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <EmailIcon />
            </a>
            <a
              style={{ color: 'white' }}
              href='tel:0683485118'
              target='_blank'
              rel='noopener noreferrer'
            >
              <PhoneIphoneIcon />
            </a>
          </Box>
        </Paper>
      </ClickAwayListener>
    </>
  );
};
