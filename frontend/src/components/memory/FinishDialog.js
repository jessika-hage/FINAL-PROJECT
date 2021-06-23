import React from 'react';
import { Dialog } from '@material-ui/core';

import { 
	DialogContainer, 
	Button, 
	DialogText } from './Styling';

export const FinishDialog = ({ handleCollect, openWin, results }) => {
	return (
		<Dialog open={openWin}>
			<DialogContainer>
				<DialogText>
					You made it with {results.flips} flips and it took you {results.time}!
				</DialogText>
				<Button onClick={handleCollect}>Collect badges</Button>
			</DialogContainer>
		</Dialog>
	)
};
