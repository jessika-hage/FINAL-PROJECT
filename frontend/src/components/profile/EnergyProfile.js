import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';

import { updateRanking } from 'reducers/profile';
import { 
	EnergyContainer, 
	EnergyText, 
	AlertIcon, 
	AlertContainer } from './Styling';

export const EnergyProfile = () => {
	const energy = useSelector((store) => store.profile.energy);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const [alert, setAlert] = useState(false);
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	const createdAtDate = moment(createdAt);
	const today = moment();
	const difference = today.diff(createdAtDate, 'days');
	const averageEnergy = energy / difference;
	const delay = 1000 * 60 * 30;

	useEffect(() => {
		if (averageEnergy < 1500) {
			setAlert(true);
			setTimeout(() => {
				dispatch(updateRanking(-1))
			}, delay)
		} else {
			setAlert(false);
		}
	}, [averageEnergy, delay, dispatch])

	const onToggleDialog = () => {
		setOpen(!open);
	};


	return (
		<EnergyContainer>
			<EnergyText>My average intake: {averageEnergy}kcal 
				{alert && <AlertIcon onClick={onToggleDialog}></AlertIcon>}
			</EnergyText>
			<Dialog open={open} onClose={onToggleDialog}>
				<AlertContainer>
					<EnergyText>Your energy intake is running dangerously low! You need to eat something or you're ranking will go down with 1.</EnergyText>
				</AlertContainer>
			</Dialog>
			<EnergyText>Needed average: 2000kcal</EnergyText>
		</EnergyContainer>
	);
};
