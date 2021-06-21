import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import moment from 'moment';
import { FaTimes } from 'react-icons/fa';

import { updateEnergy } from '../../reducers/profile';
import {
	RoomRestaurant,
	DialogContainer,
	InfoText,
	RestaurantIcon,
	SmallInfoIcon,
	InfoContainer,
} from './Styling';

export const Restaurant = () => {
	const [open, setOpen] = useState(false);
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const [openFail, setOpenFail] = useState(false);
	const [openInfo, setOpenInfo] = useState(false);
	const allFood = useSelector((store) => store.food);
	const energy = useSelector((store) => store.profile.energy);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const createdAtDate = moment(createdAt);
	const today = moment().add(1, 'day');
	const difference = today.diff(createdAtDate, 'days');
	const averageEnergy = energy / difference;

	const dispatch = useDispatch();

	const onToggleDialog = () => {
		setOpen(!open);
	};

	const onBuy = (energy) => {
		if (averageEnergy >= 3000) {
			setOpenFail(true);
			setTimeout(() => {
				setOpenFail(false);
			}, 2000);
		} else {
				setOpenConfirmation(true);
				dispatch(updateEnergy(energy));
				setTimeout(() => {
					setOpenConfirmation(false);
				}, 2000);
			}
	};

	const onToggleInfo = () => {
		setOpenInfo(!openInfo);
	};

	return (
		<>
			<RoomRestaurant onClick={onToggleDialog}>
				<RestaurantIcon />
			</RoomRestaurant>
			<Dialog open={open} onClose={onToggleDialog}>
				<Title>Nutrition 
					<IconContainer>
						<SmallInfoIcon onClick={onToggleInfo} />
						<CloseIcon onClick={onToggleDialog} />
					</IconContainer>
				</Title>
				<TableHead>
						<TableTitle>Type</TableTitle>
						<TableTitle>Energy</TableTitle>
						<TableTitleHide>Protein</TableTitleHide>
						<TableTitleHide>Salt</TableTitleHide>
						<TableTitle>Price</TableTitle>
					</TableHead>
				<TableContainer>
					{allFood.map((food) => (
						<FoodList key={food.id}>
							<FoodType>{food.title}</FoodType>
							<Food>{food.energy}kcal</Food>
							<FoodHide>{food.protein}g</FoodHide>
							<FoodHide>{food.salt}g</FoodHide>
							<Food>
								{food.price}$<BuyFood onClick={() => onBuy(food.energy)}>Buy</BuyFood>
							</Food>
						</FoodList>
					))}
				</TableContainer>
			</Dialog>
			<Dialog open={openInfo} onClose={onToggleInfo}>
				<InfoContainer>
					It is very important that you get the energy that you need. 
					You need to have a daily average intake of 2000 kcal and
					you keep track on your profile and it will alert you when you are running low.
					And you can not buy food when you have 3000 or more, since the energy needs to be
					divided between all the citizens!
				</InfoContainer>
			</Dialog>
			<Dialog open={openConfirmation}>
				<DialogContainer>
					<InfoText>
						Purchase successfull! Your energyintake has now increased!
					</InfoText>
				</DialogContainer>
			</Dialog>
			<Dialog open={openFail}>
				<DialogContainer>
					<InfoText>
						You have more than 3000 in energy, you need to share with the other citizens!
					</InfoText>
				</DialogContainer>
			</Dialog>
		</>
	);
};


const CloseIcon = styled(FaTimes)`
	font-size: 17px;
	cursor: pointer;
	margin-left: 5px;
	:hover {
		transform: scale(1.2);
	}
`;

const IconContainer = styled.div`
	display: flex;
`;

const Title = styled.h4`
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${(props) => props.theme.textColor};
	padding: 7px 10px;
	margin: 0;
	width: 100%;
	background-color: ${(props) => props.theme.primary};
`;

const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
	padding: 10px 20px 15px 20px;
	max-height: 320px;
	width: 320px;
	overflow: scroll;
	&::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 15px;
		height: 15px;
		border: 2px solid ${(props) => props.theme.secondary};
	}
	@media (min-width: 768px) {
		width: 600px;
	}
`;

const TableHead = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
	padding: 12px 30px 8px 15px;
	@media (min-width: 768px) {
		padding: 12px 20px 8px 18px;
	}
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

const TableTitleHide = styled(TableTitle)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const Food = styled.p`
	width: 30%;
	text-align: right;
	margin: 0;
	font-size: 12px;
	font-family: 'Open Sans', serif;
	@media (min-width: 768px) {
		font-size: 14px;
		width: 20%;
		text-align: left;
	}
`;

const FoodType = styled(Food)`
	text-align: left;
`;

const FoodHide = styled(Food)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const FoodList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 6px 0 4px 0;
	border-bottom: 2px solid ${(props) => props.theme.secondary};
	@media (min-width: 768px) {
		padding: 6px 0 4px 0;
	}
`;

const BuyFood = styled.button`
	padding: 5px;
	margin: 0 0 0 10px;
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
