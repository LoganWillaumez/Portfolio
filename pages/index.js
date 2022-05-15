import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, CssBaseline, Divider, TextField } from '@mui/material';
import { Box } from '@mui/system';
// import SimpleBottomNavigation from './Components/Navigation/Navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Home } from './Components/Home/Home';
// import { About } from './Components/About/About';
// import { Contact } from './Components/Contact/Contact';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { LeftMenu } from './Components/LeftMenu/LeftMenu';
// import { Scene } from './Components/Scene/Scene';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function App() {
  return (
    <div className={styles.container}>
      {/* <Container
        component={motion.main}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        maxWidth='sm'
        disableGutters
        sx={{
          backgroundColor: '#161C24',
          background:
            'radial-gradient(circle, rgba(65,78,96,0.5) 0%, rgba(22,28,36,1) 100%)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          minWidth: '100vw',
          width: '100vw',
        }}
      >
        <Box
          sx={{
            flex: '1',
            // gridTemplateColumns: '1fr 1fr',
            // gridTemplateRows: '1fr 10rem',
          }}
        ></Box>
      </Container> */}
      <h1> Coucou</h1>
    </div>
  );
}
