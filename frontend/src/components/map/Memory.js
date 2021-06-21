import React, { useState} from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomMemory, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton,
  MemoryIcon,
  CloseIcon } from './Styling';
  
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
            <InfoTitle>
              Memory
              <CloseIcon onClick={onToggleGameDialog} />
            </InfoTitle>
            <InfoText>In here you practice your memory skills. If you solve it you will get 10 badges.</InfoText>
            <StartGameButton to='/memorygame'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
      </RoomMemory>
  )
};