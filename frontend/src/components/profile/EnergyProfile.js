import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { EnergyContainer, EnergyText } from './Styling';

export const EnergyProfile = () => {
  const energy = useSelector((store) => store.profile.energy)
  const createdAt = useSelector((store) => store.profile.createdAt);

  // const allDays = moment()
  // const differenceDays = allDays - moment(createdAt).toNow(true)

  return (
    <EnergyContainer>
      <EnergyText>My average intake: {energy}kcal</EnergyText>
      <EnergyText>Needed average: 2000kcal</EnergyText>
      {/* <EnergyText>{moment(createdAt).toNow().format('DD')}</EnergyText> */}
    </EnergyContainer>
  )
};
