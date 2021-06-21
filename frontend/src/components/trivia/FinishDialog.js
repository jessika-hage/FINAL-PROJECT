import React from 'react';
import { Dialog } from '@material-ui/core';

import { DialogContainer, DialogText, Button } from './Styling';

export const FinishDialog = ({ 
	open, 
	endText, 
	onClick, 
	buttonText }) => {

	return (
		<Dialog open={open}>
			<DialogContainer>
				<DialogText>You managed to get {endText} correct answers!</DialogText>
				<Button onClick={onClick}>{buttonText}</Button>
			</DialogContainer>
		</Dialog>
	);
};

