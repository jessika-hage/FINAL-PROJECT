import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { 
  RoomSpace, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton } from './Styling';


export const SpaceBall = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

  return (
      <RoomSpace onClick={onToggleGameDialog}>
        <Icons>
          <LocalHospitalIcon fontSize='large' />
        </Icons>
        <Dialog open={openGame} onClick={onToggleGameDialog}>
          <DialogContainer>
            <InfoTitle>Space Ball</InfoTitle>
            <InfoText>This game is to train your reflexes and see how fast you are! You have 30 seconds to collect as many points as possible. Every point equals one badge. You get your points by clicking on the flying circles. The smallest one gives you 3 points per click, the second biggest gives you 2 points och the biggest gives you 1 point per click.</InfoText>
            <StartGameButton to='/spaceball'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
    </RoomSpace>
  )
};