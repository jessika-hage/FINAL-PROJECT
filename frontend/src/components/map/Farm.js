import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Tooltip } from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import {
	Icons,
	DialogContainer,
	InfoTitle,
	InfoText,
	StartGameButton,
	RoomFarm,
} from './Styling';

export const Farm = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<Tooltip title='PROTIN FARM'>
			<RoomFarm onClick={onToggleGameDialog}>
				<Icons>
					<InvertColorsIcon fontSize='large' />
				</Icons>
				<Dialog open={openGame} onClick={onToggleGameDialog}>
					<DialogContainer>
						<InfoTitle>Fish Farm</InfoTitle>
						<InfoText>Catch the fishes.</InfoText>
						<StartGameButton to='/farm'>Lets start</StartGameButton>
					</DialogContainer>
				</Dialog>
			</RoomFarm>
		</Tooltip>
	);
};
