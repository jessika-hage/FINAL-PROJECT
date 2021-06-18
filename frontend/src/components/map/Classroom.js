import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';

import { 
  RoomClassroom, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton,
List,
ListItem } from './Styling';

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
            <InfoText>In the classroom you can get badges by solving mathematical problems. There are three:</InfoText>
            <List>
              <ListItem>BEGINNER: You will have 40s and the numbers are low. This of course reflects on how many badges you can make.</ListItem>
              <ListItem>AVERAGE: Everything is pretty average here.</ListItem>
              <ListItem>EXPERT: For the pro citizen! Higher numbers and short time, but you will get DOUBLE the badges.</ListItem> 
            </List>
            <StartGameButton to='/classroom'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
      </RoomClassroom>
  )
};
