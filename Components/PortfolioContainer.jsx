import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from 'react';
import ModaleFolio from './ModaleFolio';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function TitlebarImageList({ projectData, info }) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Typography
        variant={'h3'}
        sx={{ paddingTop: '10%', textAlign: 'center', fontWeight: '700' }}
      >
        Portfolio
      </Typography>
      <ImageList
        sx={{
          width: '100%',
          paddingTop: '2%',
        }}
        cols={2}
      >
        {projectData.map((item, i) => (
          <ImageListItem
            sx={{ aspectRatio: '16/9' }}
            key={item.img}
            onClick={(e) => {
              toggleOpen();
              setModalData(item);
            }}
          >
            <Image
              layout='fill'
              objectFit='cover'
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
        <ModaleFolio
          info={info}
          toggleOpen={toggleOpen}
          open={open}
          title={modalData?.title}
          img={modalData?.img}
          desc={modalData?.desc}
          url={modalData?.url}
          icon={modalData?.icon}
        />
      </ImageList>
    </>
  );
}
