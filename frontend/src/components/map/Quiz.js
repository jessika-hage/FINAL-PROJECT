import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
	RoomQuiz, 
	DialogContainer, 
	InfoTitle, 
	CloseIcon, 
	QuizIcon,
	InfoText, 
	List, 
	ListItem, 
	StartGameButton } from './Styling';

export const Quiz = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<>
			<RoomQuiz 
				tabIndex='0' 
				aria-label='Quiz' 
				onClick={onToggleGameDialog}>
				<QuizIcon />
			</RoomQuiz>
			<Dialog open={openGame} onClose={onToggleGameDialog}>
				<DialogContainer>
					<InfoTitle>
						Quiz time!
						<CloseIcon tabIndex='0' onClick={onToggleGameDialog} />
					</InfoTitle>
					<InfoText>In here there is a quiz with true or false question. But there is a challenge with jumping circles and buttons.
						But at least you get to choose the difficulty level of the questions between: 
					</InfoText>
					<List>
						<ListItem>EASY!</ListItem>
						<ListItem>HARD!</ListItem>
					</List>
					<StartGameButton to='/quiz'>Lets start</StartGameButton>
				</DialogContainer>
			</Dialog>
		</>
	)
};
