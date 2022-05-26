import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Divider } from '@mui/material';
import { useMediaMatch } from 'rooks';

export default function CapNavigation({ toggleClick, active, setActive }) {
  const [value, setValue] = React.useState(0);
  const landscape = useMediaMatch('(orientation: landscape)');
  return (
    <Box
      sx={{
        width: 'calc(40vw/40vw)',
        position: 'fixed',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1',
        ...(landscape && {
          bottom: '8%',
        }),
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          borderRadius: '15px',
          height: '3rem',
          '& .Mui-selected': {
            color: '#FC8B20',
          },
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
          toggleClick(newValue);
          setActive(!active);
        }}
      >
        <BottomNavigationAction
          label='3D'
          sx={{ fontWeight: '700', borderRight: '1px solid #4C4C4D' }}
        />
        <BottomNavigationAction label='Web' sx={{ fontWeight: '700' }} />
      </BottomNavigation>
    </Box>
  );
}
