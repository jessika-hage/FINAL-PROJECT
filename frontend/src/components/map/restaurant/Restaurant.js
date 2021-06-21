import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import moment from 'moment';

import { updateEnergy } from '../../../reducers/profile';
import { Dialogs } from './Dialogs';
import { RoomRestaurant, RestaurantIcon } from '../Styling';
import { 
	Title, 
	IconContainer, 
	CloseIcon, 
	SmallInfoIcon, 
	TableContainer, 
	TableHead, 
	TableTitle, 
	TableTitleHide, 
	Food, 
	FoodType, 
	FoodHide, 
	FoodList, 
	BuyFood } from './Styling';

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
		if (averageEnergy < 3000) {
			setOpenConfirmation(true);
			dispatch(updateEnergy(energy));
			setTimeout(() => {
				setOpenConfirmation(false);
			}, 2000);
		} else {
				setOpenFail(true);
				setTimeout(() => {
					setOpenFail(false);
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
			<Dialogs 
				openInfo={openInfo} 
				onToggleInfo={onToggleInfo}
				openConfirmation={openConfirmation}
				openFail={openFail} />
		</>
	);
};
