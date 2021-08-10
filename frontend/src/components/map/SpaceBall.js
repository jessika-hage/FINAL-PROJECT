import React, { useState } from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import { BigDialog } from '../reusables/BigDialog';
import { RoomSpace, Icons } from './Styling';

export const SpaceBall = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<>
			<RoomSpace 
				tabIndex='0' 
				aria-label='Spaceball' 
				onClick={onToggleGameDialog}>
				<Icons>
					<BubbleChartIcon fontSize='large' />
				</Icons>
			</RoomSpace>
			<BigDialog
				open={openGame}
				onClose={onToggleGameDialog}
				titleText='Space Ball'
				text='This game is to train your reflexes and see how fast you are, also an
				important part of being a citizen! You have 30 seconds to collect as many
				points as possible. 3 points equals 1 badge.'
				circleList
				gameLink='/spaceball'
				gameButton='Lets start' />
		</>
	);
};
