import React from 'react';
import carboncoins from '../../images/carboncoins.png';

const CarbonCoins = () => (
  <div
    style={{ width: '100vw',
      height: '100vh',
      background: '#D8D8D8',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column' }}
  >
    <img 
      alt="carbo" 
      src={carboncoins} 
      style={{ marginTop: '16px', marginLeft: '32px', width: '80%', height: '80%' }} 
    />
  </div>
);

export default CarbonCoins;
