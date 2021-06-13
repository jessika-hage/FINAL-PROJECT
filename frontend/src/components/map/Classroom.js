import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';

import { 
  RoomClassroom, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton } from './Styling';

export const Classroom = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

  return (
      <RoomClassroom onClick={onToggleGameDialog}>
        <Icons>
          <Icon className='fa fa-calculator' />
        </Icons>
        <Dialog open={openGame} onClick={onToggleGameDialog}>
          <DialogContainer>
            <InfoTitle>Classroom</InfoTitle>
            <InfoText>In the classroom you can get badges by solving mathematical problems. You have 30 seconds, can make maximum 3 mistakes and get maximum 10 badges.</InfoText>
            <StartGameButton to='/classroom'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
      </RoomClassroom>
  )
};