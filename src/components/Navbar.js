import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/shapeuplogo.png';

const Navbar = () => (
  <Stack className='shadow-md gap-32 mt-5 px-5' direction="row" justifyContent="space-around" sx={{justifyContent: 'none' }}>
    <Link to="/">
      <img src={Logo} alt="logo" className='w-12 h-12 mx-5 mb-5 opacity-70 hover:opacity-100 shadow-md'/>
    </Link>
    <Stack className='gap-10 items-end' direction="row" fontFamily="Alegreya">
      <Link to="/" className='text-black hover:text-red-600 font-semibold mb-5 text-2xl'>
        Home
      </Link>
      <a href="#exercises" className='text-black hover:text-red-600 font-semibold mb-5 text-2xl'>
        Exercises
      </a>
      <a href="#pricing" className='text-black hover:text-red-600 font-semibold mb-5 text-2xl'>
        Subscription
      </a>
      <a className='text-black font-semibold mb-5'>
        (Subscription coming soon)
      </a>
    </Stack>
  </Stack>
);

export default Navbar;