import { useEffect, useState } from 'react';
import { Header } from './Header';
import { MenuSocial } from './MenuSocial';
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
