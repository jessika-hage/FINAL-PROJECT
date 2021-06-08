import React from 'react';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AppsIcon from '@material-ui/icons/Apps';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export const Map = () => {
	return (
		<GridContainer>
			<Tooltip title='CLASSROM! Solve mathematical problems and earn points!'>
				<RoomOne to='/classroom'>
					<Icons>
						<Icon className='fa fa-calculator' />
					</Icons>
				</RoomOne>
			</Tooltip>

			<RoomTwo>
				<Icons>
					<HotelIcon fontSize='large' />
				</Icons>
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
				<RoomFour to='Store'>
					<Icons>
						<LocalGroceryStoreIcon fontSize='large' />
					</Icons>
				</RoomFour>
			</Tooltip>
			<Tooltip title='GYM!'>
				<RoomFive>
					<Icons>
						<FitnessCenterIcon fontSize='large' />
					</Icons>
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
		</GridContainer>
	);
};

const GridContainer = styled.section`
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(7, 1fr);
	width: 100%;
`;

const RoomOne = styled(Link)`
	grid-column: 1 / span 2;
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
	grid-column: 1 / span 2;
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
	grid-column: 3 / span 2;
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
	grid-column: 3 / span 2;
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
	grid-column: 5 / span 2;
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
	grid-column: 5 / span 2;
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

const CircleRoom = styled.div`
	grid-column: 2 / span 2;
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
	grid-column: 7 / span 3;
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
