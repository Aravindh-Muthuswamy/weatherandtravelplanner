import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div">
            Travel Itenary
          </Typography>&nbsp;&nbsp;
          <Link href="/" color="inherit" underline="none">Home</Link>&nbsp;&nbsp;
          <Link href="/additenar" color="inherit" underline="none">Add Itenary</Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
