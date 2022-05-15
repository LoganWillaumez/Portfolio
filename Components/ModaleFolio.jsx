import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { flexbox } from '.pnpm/@mui+system@5.7.0_t4r7icl7x3elshpaxc4xm7jrem/node_modules/@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
}) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <img
            style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
            src={img}
          ></img>
          <Typography
            sx={{ textAlign: 'center', pt: 2, fontWeight: '600' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            {title}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2, pr: 3, pl: 5, pb: 2 }}
          >
            {desc}
          </Typography>
          <a
            style={{
              width: '100%',
              textAlign: 'center',
              margin: '0 auto',
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
      </Modal>
    </div>
  );
}
