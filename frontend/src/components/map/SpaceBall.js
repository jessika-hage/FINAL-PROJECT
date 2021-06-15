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
          <InfoText>This game is to train your reflexes and see how fast you are, also an important part of being a citizen! 
            You have 30 seconds to collect as many points as possible. Two points equals one badge. You get your points by clicking on the flying circles. The blue ones gives you 3 points per click and the others 1 point.</InfoText>
          <StartGameButton to='/spaceball'>Lets start</StartGameButton>
        </DialogContainer>
      </Dialog>
  </RoomSpace>
  )
};