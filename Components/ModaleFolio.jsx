import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { flexbox } from '.pnpm/@mui+system@5.7.0_t4r7icl7x3elshpaxc4xm7jrem/node_modules/@mui/system';
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
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  console.log(`üöÄ ~ icon`, icon);

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
                // height: { xs: '30vh', lg: '40vh' },
                height: '30vh',
                objectFit: 'cover',
              }}
              src={img}
            ></Box>
            <Box sx={{ position: 'relative' }}>
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
            </Box>
            <a
              style={{
                width: '100%',
                textAlign: 'center',
                margin: '0 auto',
                paddingBottom: '1rem',
                color: 'white',
                bottom: '0',
                position: 'absolute',
              }}
              href={url}
              rel='noopener noreferrer'
              target='_blank'
            >
              more info
            </a>
            <Box
              sx={{
                // height: '20px',
                // width: '100px',
                // backgroundColor: 'red',
                position: 'absolute',
                display: 'flex',
                gap: '1rem',
                bottom: '3rem',
              }}
            >
              {icon?.map((pic, i) => {
                return (
                  <Box
                    key={pic + i}
                    sx={{
                      height: { xs: '20px', lg: '40px' },
                      width: { xs: '20px', lg: '40px' },
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
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
