import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import ModaleFolio from './ModaleFolio';

export default function TitlebarImageList() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <ImageList
      sx={{
        width: '100%',
        height: { xs: '85vh', lg: '90vh' },
        paddingTop: '10%',
      }}
    >
      <ImageListItem key='Subheader' cols={2}>
        <ListSubheader
          sx={{ fontSize: '2rem', fontWeight: '700' }}
          component='div'
        >
          Portfolio
        </ListSubheader>
      </ImageListItem>
      {itelgata.map((item, i) => (
        <ImageListItem
          key={item.img}
          onClick={(e) => {
            toggleOpen();
            setModalData(item);
          }}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
          <ImageListItemBar
            title={item.title}
            // subtitle={item.author}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about ${item.title}`}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </ImageListItem>
      ))}
      <ModaleFolio
        toggleOpen={toggleOpen}
        open={open}
        title={modalData?.title}
        img={modalData?.img}
        desc={modalData?.desc}
        url={modalData?.url}
      />
    </ImageList>
  );
}

const itelgata = [
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473161-680a96fc-2cd3-4323-b6a9-8f07cc194987.png',
    title: 'Lusco',
    desc: 'A project that aims to clone google. I wanted to recreate the design in my own way, mainly to learn tailwind.',
    url: 'https://github.com/LoganWillaumez/Lusco',
    rows: 2,
    cols: 2,
    featured: true,
    icon: [],
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473609-d7a7a30d-6694-486f-b655-e54099a9265d.png',
    title: 'Netflix clone',
    desc: 'A netflix clone, super fun to create and complexe to do. Mega fun ! ',
    url: 'https://github.com/LoganWillaumez/Netflix-clone',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473758-37114546-de05-4e88-beea-4c452176056b.png',
    title: 'Circles',
    author: '@helloimnik',
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473161-680a96fc-2cd3-4323-b6a9-8f07cc194987.png',
    title: 'Lusco',
    desc: 'Project made for training about query and tailwindcss. Really fun to do ! ',
    url: 'https://github.com/LoganWillaumez/Lusco',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473609-d7a7a30d-6694-486f-b655-e54099a9265d.png',
    title: 'Netflix clone',
    desc: 'A netflix clone, super fun to create and complexe to do. Mega fun ! ',
    url: 'https://github.com/LoganWillaumez/Netflix-clone',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473758-37114546-de05-4e88-beea-4c452176056b.png',
    title: 'Circles',
    author: '@helloimnik',
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473161-680a96fc-2cd3-4323-b6a9-8f07cc194987.png',
    title: 'Lusco',
    desc: 'Project made for training about query and tailwindcss. Really fun to do ! ',
    url: 'https://github.com/LoganWillaumez/Lusco',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473609-d7a7a30d-6694-486f-b655-e54099a9265d.png',
    title: 'Netflix clone',
    desc: 'A netflix clone, super fun to create and complexe to do. Mega fun ! ',
    url: 'https://github.com/LoganWillaumez/Netflix-clone',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://user-images.githubusercontent.com/60406970/168473758-37114546-de05-4e88-beea-4c452176056b.png',
    title: 'Circles',
    author: '@helloimnik',
  },
];
