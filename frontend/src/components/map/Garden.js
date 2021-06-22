import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

import { 
	RoomQuiz, 
	Icons, 
	DialogContainer, 
	InfoTitle, 
	CloseIcon, 
	InfoText, 
	List, 
	ListItem, 
	StartGameButton } from './Styling';

export const Garden = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
			<RoomQuiz onClick={onToggleGameDialog}>
				<Icons>
					<LocalFloristIcon fontSize='large' />
				</Icons>
				<Dialog open={openGame} onClick={onToggleGameDialog}>
          <DialogContainer>
            <InfoTitle>
              Quiz time!
              <CloseIcon onClick={onToggleGameDialog} />
            </InfoTitle>
            <InfoText>In here there is a quiz with true or false question. But there is a challenge with jumping buttons.
							But at least you get to choose the difficulty level of the questions between: 
						</InfoText>
            <List>
              <ListItem>EASY!</ListItem>
              <ListItem>HARD!</ListItem>
            </List>
            <StartGameButton to='/quiz'>Lets start</StartGameButton>
          </DialogContainer>
        </Dialog>
			</RoomQuiz>
	);
};
