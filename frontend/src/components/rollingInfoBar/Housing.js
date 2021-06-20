import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
	HousingText,
	Button,
	DialogContainer,
	HouseContainer,
	HouseTitle,
	HouseTextContainer,
	HouseText,
	ChangeText,
	ButtonContainer,
	BuyButton,
	HouseImage,
	Title,
	PriceContainer,
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
				<Button onClick={onToggleDialog}>See latest</Button>
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
									<Title>{house.title}</Title>
									<HouseText>{house.description}</HouseText>
									<PriceContainer>
										<HouseText> Price from: {house.price} $</HouseText>
									</PriceContainer>
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
