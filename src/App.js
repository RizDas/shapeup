import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navi from './components/Navi';
import Home from './components/sites/Home';
import Footer from './components/Footer';
import TrainDetail from './components/sites/TrainDetail';
import './App.css';

const App = () => {
  return (
    <Box width='400px' sx={{width: { xl: '1488px' }}} m="auto">
      <Navi />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/train/:id' element={<TrainDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App