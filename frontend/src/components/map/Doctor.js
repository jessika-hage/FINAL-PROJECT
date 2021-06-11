import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import HotelIcon from '@material-ui/icons/Hotel';

import { 
  RoomDoctor, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  DialogButton } from './Styling';


export const Doctor = () => {
  const [openDoctor, setOpenDoctor] = useState(false);

	const onToggleDoctorDialog = () => {
		setOpenDoctor(!openDoctor);
	};

  return (
    <Tooltip title='DOCTOR!'>
      <RoomDoctor onClick={onToggleDoctorDialog}>
        <Icons>
          <HotelIcon fontSize='large' />
        </Icons>
        <Dialog open={openDoctor} onClick={onToggleDoctorDialog}>
          <DialogContainer>
            <InfoTitle>Get some rest!</InfoTitle>
            <InfoText>
              As a citizen on this ship, we like it when you work hard. That's why it
              is important that you also sleep a little bit sometimes. You will lose 2
              badges but will gain 1 ranking!
            </InfoText>
            <DialogButton>Sleep!</DialogButton>
          </DialogContainer>
        </Dialog>
    </RoomDoctor>
  </Tooltip>
  )
};