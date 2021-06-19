import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { housing } from '../../reducers/housing';

import {
	HousingText,
	Button,
	DialogContainer,
	HouseContainer,
	HouseTitle,
	HouseTextContainer,
	Text,
	ChangeText,
	ButtonContainer,
	BuyButton,
	HouseImage,
} from './Styling';

export const Housing = () => {
	const [open, setOpen] = useState(false);
	const housing = useSelector((store) => store.housing);

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
					<HouseTitle>LET YOUR DREAM COME TRUE</HouseTitle>
					<Carousel autoPlay='true' infiniteLoop='true'>
						{housing.map((house) => (
							<HouseContainer key={house.id}>
								<HouseImage
									src={require(`./assets/${house.image}`)}
									alt={house.title}
								/>
								<HouseTextContainer>
									<HouseTitle>{house.title}</HouseTitle>
									<Text>{house.description}</Text>
									<Text>{house.price} $</Text>
								</HouseTextContainer>
							</HouseContainer>
						))}
					</Carousel>
					<ButtonContainer>
						<BuyButton>Buy House</BuyButton>
					</ButtonContainer>
				</DialogContainer>
			</Dialog>
		</>
	);
};
