import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { Card } from './Card';

export const NutritionCard = () => {
	const [open, setOpen] = useState(false);

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
				<TableTitleLinks>Carbohydrates</TableTitleLinks>
				<CitizenDaysLink>Kcal</CitizenDaysLink>
				<TableTitleLinks>Vitamins</TableTitleLinks>
				<TableTitleLinks>Protein</TableTitleLinks>
			</TableHead>
				<CitizensList>
					<Citizen>340kcal</Citizen>
					<Citizen>40 vitamin</Citizen>
					<CitizenDays>400kcal</CitizenDays>
					<Citizen>400kcal</Citizen>
					<Citizen>500kcal</Citizen>
				</CitizensList>
		</TableContainer>
	</Dialog>
	</>
	);
};

const ThinnerCard = styled(Card)`
	width: 100%;
	height: 120px;
	margin: 0;
	border-bottom: 2px solid ${props => props.theme.primary};
	@media (min-width: 768px) {
		height: 160px;
	}
`;

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.textColor};
	max-height: 320px;
	min-width: 600px;
	overflow: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
`;

const TableHead = styled.div`
	display: flex;
	border-bottom: 2px solid ${props => props.theme.secondary};
`;

const TableTitle = styled.div`
	width: 20%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.textColor};
	font-size: 14px;
`;

const TableTitleLinks = styled(TableTitle)`
	cursor: pointer;
	width: 22%;
	:hover, :focus {
		text-decoration: underline;
	}
`;

const CitizenDaysLink = styled(TableTitleLinks)`
  display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const CitizenAvatar = styled.img`
	height: 18px;
	width: 18px;
	padding: 2px;
	margin-right: 5px;
	background-color: ${props => props.theme.secondary};
	border-radius: 50%;
	@media (min-width: 768px) {
		height: 28px;
		width: 28px;
		padding: 2px;
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

const CitizenDays = styled(Citizen)`
  display: none;
	@media (min-width: 768px) {
		display: flex;
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
