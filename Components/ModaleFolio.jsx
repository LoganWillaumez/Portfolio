import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxWidth: '1000px',
  height: '60vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  boxShadow: 24,
  p: 0,
};

export default function ModaleFolio({
  open,
  toggleOpen,
  title,
  img,
  desc,
  url,
  icon,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box>
          <Box sx={style}>
            <Box
              component='img'
              sx={{
                width: '100%',
                height: '30vh',
                objectFit: 'cover',
              }}
              src={img}
            ></Box>
            <Box
              className='rpout'
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  pt: 2,
                  fontWeight: '600',
                  fontSize: { xs: 'calc(1vw + 1vh + 1vmin)', lg: '2rem' },
                }}
                id='modal-modal-title'
                component='h2'
              >
                {title}
              </Typography>

              <Typography
                id='modal-modal-description'
                sx={{
                  mt: 2,
                  pr: 3,
                  pl: 5,
                  pb: 2,
                  maxWidth: '600px',
                  fontSize: {
                    xs: 'calc(1vw + 1vh + 0.5vmin)',
                    md: 'calc(1vw + 1vh + 0.1vmin)',
                    lg: '1.5rem',
                  },
                  textAlign: 'justify',
                  fontWeight: '300',
                }}
              >
                {desc}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  bottom: { xs: '3vh', lg: '4rem' },
                }}
              >
                {icon?.map((pic, i) => {
                  return (
                    <Box
                      key={pic + i}
                      sx={{
                        height: { xs: 'calc(1vw + 1vh + 2vmin)', lg: '40px' },
                        width: { xs: 'calc(1vw + 1vh + 2vmin)', lg: '40px' },
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={pic}
                        alt={pic}
                        layout='fill'
                        objectFit='contain'
                      />
                    </Box>
                  );
                })}
              </Box>
              <a
                style={{
                  width: '100%',
                  textAlign: 'center',
                  paddingBottom: '1rem',
                  color: 'white',
                }}
                href={url}
                rel='noopener noreferrer'
                target='_blank'
              >
                more info
              </a>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
