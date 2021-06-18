import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import {
	HousingText,
	Button,
	DialogContainer,
	HouseTitle,
	TextContainer,
	Text,
	ChangeText,
	ButtonContainer,
	BuyButton,
} from './Styling';

export const Housing = () => {
	const [open, setOpen] = useState(false);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	return (
		<>
			<HousingText>
				Housing:
				<ChangeText>Latest</ChangeText>
				<Button onClick={onToggleDialog}>See house</Button>
			</HousingText>
			<Dialog open={open} onClose={onToggleDialog}>
				<DialogContainer>
					<HouseTitle>HOUSES</HouseTitle>
					<TextContainer>
						<Text>1,500,000 $</Text>
					</TextContainer>
					<ButtonContainer>
						<BuyButton>Buy House</BuyButton>
					</ButtonContainer>
				</DialogContainer>
			</Dialog>
		</>
	);
};
