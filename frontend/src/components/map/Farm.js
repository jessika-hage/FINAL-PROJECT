import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Tooltip } from '@material-ui/core';

import {
	DialogContainer,
	InfoTitle,
	InfoText,
	StartGameButton,
	RoomFarm,
	FishIcon,
	CloseIcon } from './Styling';

export const Farm = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<Tooltip title='PROTIN FARM'>
			<RoomFarm onClick={onToggleGameDialog}>
				<FishIcon />
				<Dialog open={openGame} onClick={onToggleGameDialog}>
					<DialogContainer>
						<InfoTitle>
							Fish Farm
							<CloseIcon onClick={onToggleGameDialog} />
						</InfoTitle>
						<InfoText>Catch the fishes.</InfoText>
						<StartGameButton to='/farm'>Lets start</StartGameButton>
					</DialogContainer>
				</Dialog>
			</RoomFarm>
		</Tooltip>
	);
};
