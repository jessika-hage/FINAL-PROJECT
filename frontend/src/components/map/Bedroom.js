import React, { useState } from 'react';
import HotelIcon from '@material-ui/icons/Hotel';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomBedroom, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  DialogButton } from './Styling';

export const Bedroom = () => {
  const [openBedroom, setOpenBedroom] = useState(false);

  const onToggleBedroomDialog = () => {
		setOpenBedroom(!openBedroom);
	};

  return (
    <Tooltip title='BEDROOM!'>
      <RoomBedroom onClick={onToggleBedroomDialog}>
      <Icons>
        <HotelIcon fontSize='large' />
      </Icons>
      <Dialog open={openBedroom} onClick={onToggleBedroomDialog}>
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
    </RoomBedroom>
  </Tooltip>
  )
};