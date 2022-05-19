import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Divider } from '@mui/material';

export default function CapNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '40vw' }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ borderRadius: '15px' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='3D' />
        <Divider orientation='vertical' />
        <BottomNavigationAction label='Web' />
      </BottomNavigation>
    </Box>
  );
}