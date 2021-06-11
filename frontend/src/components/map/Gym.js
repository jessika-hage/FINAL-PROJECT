import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Dialog from '@material-ui/core/Dialog';

import { RoomGym, Icons, DialogContainer, InfoTitle, InfoText, DialogButton } from './Styling';

export const Gym = () => {	
  const [openGym, setOpenGym] = useState(false);

	const onToggleGymDialog = () => {
		setOpenGym(!openGym);
	};
  
  return (
    <Tooltip title='GYM!'>
    <RoomGym onClick={onToggleGymDialog}>
      <Icons>
        <FitnessCenterIcon fontSize='large' />
      </Icons>
      <Dialog open={openGym} onClick={onToggleGymDialog}>
        <DialogContainer>
          <InfoTitle>Get some workout!</InfoTitle>
          <InfoText>
            As a citizen on this ship, it is very important that you exercise
            regularly. Week citizens won't last for long! The price for entering the
            gym is 5 badges but it will increase your ranking with 1 since you will
            become a stronger citizen.
          </InfoText>
          <DialogButton>Workout!</DialogButton>
        </DialogContainer>
      </Dialog>
    </RoomGym>
  </Tooltip>
  )
};