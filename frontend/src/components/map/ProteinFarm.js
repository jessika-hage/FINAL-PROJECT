import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import {
	DialogContainer,
	InfoTitle,
	InfoText,
	StartGameButton,
	RoomFarm,
	FishIcon,
	CloseIcon,
} from './Styling';

export const ProteinFarm = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<>
			<RoomFarm 
				tabIndex='0' 
				aria-label='Protein Farm' 
				onClick={onToggleGameDialog}>
				<FishIcon />
			</RoomFarm>
			<Dialog open={openGame} onClose={onToggleGameDialog}>
				<DialogContainer>
					<InfoTitle>
						Protein Farm
						<CloseIcon tabIndex='0' onClick={onToggleGameDialog} />
					</InfoTitle>
					<InfoText>Catch the fishes.</InfoText>
					<StartGameButton to='/farm'>Lets start</StartGameButton>
				</DialogContainer>
			</Dialog>
		</>			
	)
};
