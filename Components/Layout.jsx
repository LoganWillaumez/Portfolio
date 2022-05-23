import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { MenuSocial } from './MenuSocial';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openTrue = () => {
    setOpen(true);
  };
  const openFalse = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuSocial open={open} openTrue={openTrue} openFalse={openFalse} />

      <Header />
      {children}
    </>
  );
};
