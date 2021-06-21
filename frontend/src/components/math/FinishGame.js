import React from 'react';
import { Dialog } from '@material-ui/core';

import { ResetButton } from './ResetButton';
import { DialogContainer, DialogText } from './Styling';

export const FinishGame = ({ 
	open, 
	endText, 
	resetButton, 
	onClick, 
	buttonText }) => {
	return (
		<Dialog open={open}>
			<DialogContainer>
				<DialogText>You earned {endText} badges! </DialogText>
				<ResetButton 
					resetButton={resetButton} 
					onClick={onClick} 
					buttonText={buttonText} />
			</DialogContainer>
		</Dialog>
	);
};