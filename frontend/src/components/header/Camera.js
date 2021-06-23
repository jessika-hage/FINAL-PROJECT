import React, { useState } from 'react';

import { Hidden } from './Hidden';
import { 
  CameraContainer, 
  Circle, 
  InnerCircle } from './Styling';

export const Camera = () => {
  const [background, setBackground] = useState(false);
  
  const getBackground = () => {
    setBackground(true);
    setTimeout(() => {
      setBackground(false);
    }, 2000);
  };

  return (
    <CameraContainer>
      <Circle onClick={getBackground}>
        <InnerCircle></InnerCircle>
      </Circle>
      {background && <Hidden />}
    </CameraContainer>
  )
};
