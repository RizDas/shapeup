import React, { useState } from 'react';
import { Box } from '@mui/material';
import Weather from '../Weather';
import SearchExercises from '../SearchExercises';
import Training from '../Training';

const Home = () => {
  return (
    <Box>
      <Weather />
      <SearchExercises />
      <Training />
    </Box>
  )
}

export default Home