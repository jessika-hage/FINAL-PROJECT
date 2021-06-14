import React from 'react';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import { ResetButton } from './ResetButton';
import { DialogContainer } from './Styling';

export const FinishGame = ({ 
	open, 
	endText, 
	resetButton, 
	onClick, 
	buttonText }) => {
	return (
		<Dialog open={open}>
			<DialogContainer>
				<DialogTitle>You earned {endText} badges! </DialogTitle>
				<DialogActions>
					<ResetButton 
						resetButton={resetButton} 
						onClick={onClick} 
						buttonText={buttonText} />
				</DialogActions>
			</DialogContainer>
		</Dialog>
	);
};