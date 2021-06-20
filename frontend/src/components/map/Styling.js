import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	FaFish,
	FaUtensils,
	FaShoppingCart,
	FaSquareRootAlt,
	FaInfoCircle,
	FaBed,
	FaTh,
	FaDumbbell,
} from 'react-icons/fa';

export const GridContainer = styled.section`
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(12, 1fr);
	width: 100%;
	color: ${(props) => props.theme.textColor};
`;

// Rooms
export const RoomClassroom = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.primary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomBedroom = styled.div`
	grid-column: 1 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.primary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomRestaurant = styled(RoomBedroom)`
	grid-column: 3 / span 2;
	grid-row: 3 / span 2;
	border-radius: 50%;
	z-index: 1;
`;

export const RoomGarden = styled(Link)`
	grid-column: 4 / span 3;
	grid-row: 1 / span 3;
	border-radius: 0px;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.primary};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomStore = styled(Link)`
	grid-column: 4 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomInfo = styled(RoomBedroom)`
	grid-column: 6 / span 2;
	grid-row: 3 / span 2;
	z-index: 1;
	border-radius: 0px;
`;

export const RoomGym = styled(RoomBedroom)`
	grid-column: 7 / span 3;
	grid-row: 1 / span 3;
	z-index: 0;
	border-radius: 0px;
`;

export const RoomMemory = styled(RoomClassroom)`
	grid-column: 7 / span 3;
	grid-row: 4 / span 3;
	border-radius: 0px;
`;

export const RoomFarm = styled(RoomClassroom)`
	grid-column: 10 / span 3;
	grid-row: 1 / span 3;
	border-top-left-radius: 0px;
`;

export const RoomSpace = styled(RoomBedroom)`
	grid-column: 10 / span 3;
	grid-row: 4 / span 3;
	border-bottom-left-radius: 0px;
`;

// Icons
export const Icons = styled.button`
	color: ${(props) => props.theme.textColor};
	background-color: transparent;
	:hover {
		opacity: 0.7;
	}
`;

export const FishIcon = styled(FaFish)`
	font-size: 20px;
	margin: 0;
	padding: 0;
	@media (min-width: 768px) {
		font-size: 44px;
	}
`;

export const RestaurantIcon = styled(FaUtensils)`
	font-size: 16px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const ShoppingIcon = styled(FaShoppingCart)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const MathIcon = styled(FaSquareRootAlt)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const InfoIcon = styled(FaInfoCircle)`
	font-size: 16px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const BedIcon = styled(FaBed)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const MemoryIcon = styled(FaTh)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const GymIcon = styled(FaDumbbell)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
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
	margin: 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const List = styled.ul`
	list-style-type: square;
	padding: 0 20px;
`;

export const ListItem = styled.li`
	font-size: 12px;
	margin: 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const StartGameButton = styled(Link)`
	padding: 10px 15px;
	margin-top: 20px;
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.hover};
	color: ${(props) => props.theme.textColor};
	font-size: 16px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace';
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const DialogButton = styled.button`
	padding: 5px;
	margin-top: 5px;
	font-size: 14px;
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

// Space Ball

export const CirclePoint = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	padding: 3px;
`;

export const Circle = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	margin: 0 5px 0 3px;
	@media (min-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

export const Orange = styled(Circle)`
	background-color: #f58634;
`;

export const Blue = styled(Circle)`
	background-color: #1a90ff;
`;

export const Purple = styled(Circle)`
	background-color: #b590ca;
`;

export const Pink = styled(Circle)`
	background-color: #ce1f6a;
`;

export const Green = styled(Circle)`
	background-color: #29bb89;
`;
