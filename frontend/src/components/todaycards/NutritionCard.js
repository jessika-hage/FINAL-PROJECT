import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { Card } from './Card';

export const NutritionCard = () => {
	const [open, setOpen] = useState(false);
	const allFood = useSelector((store) => store.food);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	return (
		<>
			<ThinnerCard
				title='Nutrition'
				secondaryText='Pasta'
				button='See more'
				onClick={onToggleDialog}
			/>
			<Dialog open={open} onClose={onToggleDialog}>
				<TableContainer>
					<TableHead>
						<TableTitle>Type</TableTitle>
						<TableTitleLinks>Energy</TableTitleLinks>
						<CitizenDaysLink>Protein</CitizenDaysLink>
						<TableTitleLinks>Salt</TableTitleLinks>
						<TableTitleLinks>Price</TableTitleLinks>
					</TableHead>
					{allFood.map((food) => (
						<CitizensList key={food.id}>
							<Citizen>{food.title}</Citizen>
							<Citizen>{food.energy}kcal</Citizen>
							<Citizen>{food.protein}g</Citizen>
							<Citizen>{food.salt}g</Citizen>
							<Citizen>
								{food.price}$ <BuyFood>Buy</BuyFood>
							</Citizen>
						</CitizensList>
					))}
				</TableContainer>
			</Dialog>
		</>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
	margin: 0;
	border-bottom: 2px solid ${(props) => props.theme.primary};
	@media (min-width: 768px) {
		height: 160px;
	}
`;

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
	max-height: 320px;
	min-width: 600px;
	overflow: scroll;
	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 15px;
		height: 15px;
		border: 2px solid ${(props) => props.theme.secondary};
	}
`;

const TableHead = styled.div`
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

const TableTitle = styled.div`
	width: 20%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	font-size: 14px;
`;

const TableTitleLinks = styled(TableTitle)`
	cursor: pointer;
	width: 22%;
	:hover,
	:focus {
		text-decoration: underline;
	}
`;

const CitizenDaysLink = styled(TableTitleLinks)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const Citizen = styled.p`
	width: 25%;
	margin: 0;
	font-size: 12px;
	text-align: left;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

const CitizensList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 6px 0 4px 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		padding: 6px 0 4px 0;
	}
`;

const BuyFood = styled.button`
	padding: 5px;
	margin-left: 10px;
	font-size: 12px;
	cursor: pointer;
	outline: none;
	border: none;
	width: fit-content;
	text-transform: uppercase;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;
