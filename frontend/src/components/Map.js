import React, { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AppsIcon from '@material-ui/icons/Apps';
import Icon from '@material-ui/core/Icon';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';

export const Map = () => {
	const [openInfo, setOpenInfo] = useState(false);
	const [openBedroom, setOpenBedroom] = useState(false);
	const [openGym, setOpenGym] = useState(false);

	const onToggleInfoDialog = () => {
		setOpenInfo(!openInfo);
	};

	const onToggleBedroomDialog = () => {
		setOpenBedroom(!openBedroom);
	};

	const onToggleGymDialog = () => {
		setOpenGym(!openGym);
	};

	return (
		<GridContainer>
			<Tooltip title='CLASSROM! Solve mathematical problems and earn points!'>
				<RoomOne to='/classroom'>
					<Icons>
						<Icon className='fa fa-calculator' />
					</Icons>
				</RoomOne>
			</Tooltip>
			<RoomTwo onClick={onToggleBedroomDialog}>
				<Icons>
					<HotelIcon fontSize='large' />
				</Icons>
				<Dialog open={openBedroom} onClick={onToggleBedroomDialog}>
					<DialogContainer>
						<InfoTitle>Get some rest!</InfoTitle>
						<InfoText>
							As a citizen on this ship, we like it when you work hard. That's why it
							is important that you also sleep a little bit sometimes. You will lose 2
							badges but will gain 1 ranking!
						</InfoText>
						<DialogButton>Sleep!</DialogButton>
					</DialogContainer>
				</Dialog>
			</RoomTwo>
			<Tooltip title='RESTAURANT! see todays menu and upgrade meal!'>
				<CircleRoom>
					<Icons>
						<RestaurantIcon fontSize='large' />
					</Icons>
				</CircleRoom>
			</Tooltip>
			<Tooltip title='GARDEN! grow flowers and earn points!'>
				<RoomThree>
					<Icons>
						<LocalFloristIcon fontSize='large' />
					</Icons>
				</RoomThree>
			</Tooltip>
			<Tooltip title='STORE!'>
				<RoomFour to='/store'>
					<Icons>
						<LocalGroceryStoreIcon fontSize='large' />
					</Icons>
				</RoomFour>
			</Tooltip>
			<Tooltip title='INFO!'>
				<RoomInfo onClick={onToggleInfoDialog}>
					<Icons>
						<InfoIcon fontSize='large' />
					</Icons>
					<Dialog open={openInfo} onClick={onToggleInfoDialog}>
						<DialogContainer>
							<InfoTitle>ship info & rules</InfoTitle>
						</DialogContainer>
					</Dialog>
				</RoomInfo>
			</Tooltip>
			<Tooltip title='GYM!'>
				<RoomFive onClick={onToggleGymDialog}>
					<Icons>
						<FitnessCenterIcon fontSize='large' />
					</Icons>
					<Dialog open={openGym} onClick={onToggleGymDialog}>
						<DialogContainer>
							<InfoTitle>Get some workout!</InfoTitle>
							<InfoText>
								As a citizen on this ship, it is very important that you exercise
								regularly. Week citizens won't last for long! The price for entering the
								gym is 5 badges but it will increase your ranking with 1 since you will
								become a stronger citizen.
							</InfoText>
							<DialogButton>Workout!</DialogButton>
						</DialogContainer>
					</Dialog>
				</RoomFive>
			</Tooltip>
			<Tooltip title='MEMORY'>
				<RoomSix to='/memorygame'>
					<Icons>
						<AppsIcon fontSize='large' />
					</Icons>
				</RoomSix>
			</Tooltip>
			<RoomSeven></RoomSeven>
			<Tooltip title='CLASSROM! Solve mathematical problems and earn points!'>
				<RoomFarm to='/farm'>
					<Icons>
						<Icon className='fa fa-calculator' />
					</Icons>
				</RoomFarm>
			</Tooltip>
			<RoomDoctor onClick={onToggleBedroomDialog}>
				<Icons>
					<HotelIcon fontSize='large' />
				</Icons>
				<Dialog open={openBedroom} onClick={onToggleBedroomDialog}>
					<DialogContainer>
						<InfoTitle>Get some rest!</InfoTitle>
						<InfoText>
							As a citizen on this ship, we like it when you work hard. That's why it
							is important that you also sleep a little bit sometimes. You will lose 2
							badges but will gain 1 ranking!
						</InfoText>
						<DialogButton>Sleep!</DialogButton>
					</DialogContainer>
				</Dialog>
			</RoomDoctor>
		</GridContainer>
	);
};

const GridContainer = styled.section`
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(13, 1fr);
	width: 100%;
`;

const RoomFarm = styled(Link)`
	grid-column: 10 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	border-top-right-radius: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomDoctor = styled.div`
	grid-column: 10 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	border-bottom-right-radius: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomOne = styled(Link)`
	grid-column: 1 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	border-top-left-radius: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomTwo = styled.div`
	grid-column: 1 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	border-bottom-left-radius: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomThree = styled.div`
	grid-column: 4 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomFour = styled(Link)`
	grid-column: 4 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomFive = styled.div`
	grid-column: 7 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomSix = styled(Link)`
	grid-column: 7 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomInfo = styled.div`
	grid-column: 6 / span 2;
	grid-row: 3 / span 2;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 1;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const CircleRoom = styled.div`
	grid-column: 3 / span 2;
	grid-row: 3 / span 2;
	border: 2px solid white;
	border-radius: 50%;
	z-index: 1;
	background-color: ${(props) => props.theme.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.secondary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

const RoomSeven = styled.div`
	grid-column: 8 / span 3;
	grid-row: 5 / span 1;
`;

const Icons = styled.button`
	color: ${(props) => props.theme.textColor};
	font-size: 44px;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
`;

// Dialog Info
export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
`;

export const InfoTitle = styled.h2`
	font-size: 24px;
	text-transform: uppercase;
`;

export const InfoText = styled.p`
	font-size: 12px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const DialogButton = styled.button`
	padding: 5px;
	margin-top: 5px;
	font-size: 14px;
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
	@media (min-width: 768px) {
		font-size: 18px;
	}
`;
