import React from 'react';
import styled from 'styled-components';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';

import { ResetButton } from './ResetButton';

export const FinishGame = ({ open, endText, resetButton, onClick, buttonText }) => {
	return (
		<Dialog open={open}>
			<DialogContainer>
				<DialogTitle>You earned {endText} points! </DialogTitle>
				<DialogActions>
					<ResetButton resetButton={resetButton} onClick={onClick} buttonText={buttonText} />
				</DialogActions>
			</DialogContainer>
		</Dialog>
	);
};

const DialogContainer = styled.div`
	padding: 20px;
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	font-family: 'Trispace';
	border: 2px solid ${(props) => props.theme.hover};
`;
