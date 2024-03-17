import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/shapeuplogo.png';
import '../App.css';

const Navi = () => {
  return (
    <Stack direction='row' className='gap-{ sm-"122px": xs-"40px"} px-5 pt-2' sx={{justifyContent:'none'}}>
      <Link to='/'>
        <img src={Logo} alt='logo' className='pt-1 w-12 h-12 ml-1' />
      </Link>
      <Stack direction='row' className='gap-1 flex-row text-2xl pt-4 pl-20'>
        <Link to='/' className='hover:text-red-600 no-underline fixed font-semibold'>Home</Link>
        <a href='#train' className='hover:text-red-600 pl-20 no-underline pb-5 font-semibold'>Training</a>
        <a href='#pricing' className='hover:text-red-600 pl-10 no-underline pb-5 font-semibold'>Subscription</a>
      </Stack>
    </Stack>
  )
}

export default Navi