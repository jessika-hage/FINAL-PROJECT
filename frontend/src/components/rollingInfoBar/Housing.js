import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { housing } from '../../reducers/housing';

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
	HouseImage,
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
					<HouseImage
						src={require(`./assets/${housing.image}`)}
						alt={housing.title}
					/>
					<HouseTitle>Let Your Dream Come True</HouseTitle>
					<TextContainer>
						<Text>{housing.description}</Text>
						<Text>{housing.price}</Text>
					</TextContainer>
					<ButtonContainer>
						<BuyButton>Buy House</BuyButton>
					</ButtonContainer>
				</DialogContainer>
			</Dialog>
		</>
	);
};
