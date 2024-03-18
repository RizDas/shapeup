import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/shapeuplogo.png';

const Navbar = () => (
  <Stack className='shadow-md gap-32 mt-5 px-5' direction="row" justifyContent="space-around" sx={{justifyContent: 'none' }}>
    <Link to="/">
      <img src={Logo} alt="logo" className='w-12 h-12 mx-5 mb-5 opacity-70 hover:opacity-100 shadow-md'/>
    </Link>
    <Stack
      direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link to="/" className='text-black hover:text-red-600 font-semibold mb-5'>
        Home
      </Link>
      <a href="#exercises" className='text-black hover:text-red-600 font-semibold mb-5'>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;