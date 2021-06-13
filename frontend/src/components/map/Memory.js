import React, { useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppsIcon from '@material-ui/icons/Apps';

import { 
  RoomMemory, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton } from './Styling';

export const Memory = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};
  return (
      <RoomMemory onClick={onToggleGameDialog}>
        <Icons>
          <AppsIcon fontSize='large' />
        </Icons>
        <Dialog open={openGame} onClick={onToggleGameDialog}>
          <DialogContainer>
            <InfoTitle>Memory</InfoTitle>
            <InfoText>In here you practice your memory skills. You have 30 seconds to solve the memory game and will then get 10 badges.</InfoText>
            <StartGameButton to='/memorygame'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
      </RoomMemory>
  )
};