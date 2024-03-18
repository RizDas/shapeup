import React from 'react';

const HeroBanner = () => (
    <div className='mt-32 ml-10 relative p-5'>
    <div className='mt-5 mb-10 text-6xl font-bold font-serif text-center'>
      Fitness is the Bank, as <br/>Health is Wealth.
    </div>
    <div className='text-2xl font-semibold text-red-500 text-right'>
      -- Society of Health
    </div>
    
    <div className='text-2xl'>
      Try the Best Exercises for You
    </div>
    <div className='mt-8'>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </div>
    </div>  
);

export default HeroBanner;