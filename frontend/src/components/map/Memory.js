import React, { useState} from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomMemory, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton,
  MemoryIcon } from './Styling';
  
export const Memory = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};
  return (
      <RoomMemory onClick={onToggleGameDialog}>
        <MemoryIcon />
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