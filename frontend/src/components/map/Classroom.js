import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomClassroom, 
  DialogContainer, 
  MathIcon,
  InfoTitle, 
  InfoText, 
  StartGameButton,
  List,
  ListItem,
  CloseIcon } from './Styling';

export const Classroom = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

  return (
    <>
      <RoomClassroom tabIndex='0' aria-label='Classroom' onClick={onToggleGameDialog}>
        <MathIcon />
      </RoomClassroom>
      <Dialog open={openGame} onClose={onToggleGameDialog}>
        <DialogContainer>
          <InfoTitle>
            Classroom
            <CloseIcon tabIndex='0' onClick={onToggleGameDialog} />
          </InfoTitle>
          <InfoText>In the classroom you can get badges by solving mathematical problems. You can choose between three levels:</InfoText>
          <List>
            <ListItem>BEGINNER: You will have 40s and the numbers are low. This of course reflects on how many badges you can make.</ListItem>
            <ListItem>AVERAGE: Everything is pretty average here.</ListItem>
            <ListItem>EXPERT: For the pro citizen! Higher numbers and short time, but you will get DOUBLE the badges.</ListItem> 
          </List>
          <StartGameButton to='/classroom'>Lets start</StartGameButton>
        </DialogContainer>
      </Dialog>
    </>
  )
};
