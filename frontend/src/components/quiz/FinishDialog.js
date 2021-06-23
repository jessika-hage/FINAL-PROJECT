import React from 'react';
import { Dialog } from '@material-ui/core';

import { 
	DialogContainer, 
	DialogText, 
	CollectButton } from './Styling';

export const FinishDialog = ({ 
	open, 
	endText, 
	onClick, 
	buttonText }) => {

	return (
		<Dialog open={open}>
			<DialogContainer>
				<DialogText>You managed to get {endText} correct answers!</DialogText>
				<CollectButton onClick={onClick}>{buttonText}</CollectButton>
			</DialogContainer>
		</Dialog>
	)
};

