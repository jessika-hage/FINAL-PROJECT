import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';

import { updateRanking } from 'reducers/profile';
import {
	EnergyContainer,
	EnergyText,
	AlertIcon,
	InfoDialog,
	CloseIcon,
} from './Styling';

export const EnergyProfile = ({ openEnergy, toggleEnergy }) => {
	const [alert, setAlert] = useState(false);
	const [open, setOpen] = useState(false);
	const energy = useSelector((store) => store.profile.energy);
	const createdAt = useSelector((store) => store.profile.createdAt);

	const dispatch = useDispatch();

	// Variables to calculate daily average energy
	const createdAtDate = moment(createdAt);
	const today = moment().add(1, 'day');
	const difference = today.diff(createdAtDate, 'days');
	const averageEnergy = energy / difference;
	const delay = 1000 * 60 * 30;

	// Alerting when energy is low
	// Decrease ranking after 30min if not buying food
	useEffect(() => {
		if (averageEnergy < 1500) {
			setAlert(true);
			setTimeout(() => {
				dispatch(updateRanking(-1));
			}, delay);
		} else {
			setAlert(false);
		}
	}, [averageEnergy, delay, dispatch]);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	return (
		<EnergyContainer>
			<EnergyText>
				My average intake: {averageEnergy.toFixed(0)} kcal
				{alert && <AlertIcon tabIndex='0' onClick={onToggleDialog}></AlertIcon>}
			</EnergyText>
			<Dialog open={open} onClose={onToggleDialog}>
				<InfoDialog>
					Your energy intake is running dangerously low! You need to eat something or
					you're ranking will go down with 1.
					<CloseIcon tabIndex='0' onClick={onToggleDialog} />
				</InfoDialog>
			</Dialog>
			<EnergyText>Needed average: 2000 kcal</EnergyText>
			<Dialog open={openEnergy} onClose={toggleEnergy}>
				<InfoDialog>To be a strong citizen you're average intake should be minimum 2000 kcal and if you're falling below 
					1500 kcal you need to eat within 30 minutes, otherwise you will lose ranking!
					<CloseIcon tabIndex='0' onClick={toggleEnergy} />
				</InfoDialog>
			</Dialog>
		</EnergyContainer>
	);
};
