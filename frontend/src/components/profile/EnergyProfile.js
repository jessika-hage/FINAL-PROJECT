import React from 'react';
import { useSelector } from 'react-redux';

import { EnergyContainer, EnergyText } from './Styling';

export const EnergyProfile = () => {
  
  const energy = useSelector((store) => store.profile.energy)
  return (
    <EnergyContainer>
      <EnergyText>My average intake: {energy}kcal</EnergyText>
      <EnergyText>Needed average: 2000kcal</EnergyText>
    </EnergyContainer>
  )
};
