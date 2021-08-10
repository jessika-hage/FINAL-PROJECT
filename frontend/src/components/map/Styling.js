import styled, { keyframes } from 'styled-components/macro';
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
	FaTimes,
	FaQuestion
} from 'react-icons/fa';

export const GridContainer = styled.section`
	display: grid;
	grid-template: repeat(6, 1fr) / repeat(12, 1fr);
	width: 100%;
	min-height: 200px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		min-height: 280px;
		max-height: 400px;
	}
`;

// Rooms
export const RoomClassroom = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / span 3;
	border: 2px solid white;
	border-right: none;
	border-top-left-radius: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	background-color: ${(props) => props.theme.primary};
	:hover, :focus {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomBedroom = styled.div`
	grid-column: 1 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	border-top: none;
	border-right: none;
	border-bottom-left-radius: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	background-color: ${(props) => props.theme.primary};
	:hover, :focus {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomRestaurant = styled(RoomBedroom)`
	grid-column: 3 / span 2;
	grid-row: 3 / span 2;
	border-radius: 50%;
	border: 2px solid white;
	z-index: 1;
`;

export const RoomQuiz = styled.div`
	grid-column: 4 / span 3;
	grid-row: 1 / span 3;
	border-radius: 0px;
	border: 2px solid white;
	border-bottom: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	background-color: ${(props) => props.theme.primary};
	:hover, :focus {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomStore = styled(Link)`
	grid-column: 4 / span 3;
	grid-row: 4 / span 3;
	border: 2px solid white;
	border-right: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	:hover, :focus {
		background-color: ${(props) => props.theme.hover};
	}
`;

export const RoomInfo = styled(RoomBedroom)`
	grid-column: 6 / span 2;
	grid-row: 3 / span 2;
	z-index: 1;
	border-radius: 0px;
	border: 2px solid white;
`;

export const RoomGym = styled(RoomBedroom)`
	grid-column: 7 / span 3;
	grid-row: 1 / span 3;
	z-index: 0;
	border-radius: 0px;
	border: 2px solid white;
	border-left: none;
	border-right: none;
	border-bottom: none;
`;

export const RoomMemory = styled(RoomClassroom)`
	grid-column: 7 / span 3;
	grid-row: 4 / span 3;
	border-radius: 0px;
`;

export const RoomFarm = styled(RoomClassroom)`
	grid-column: 10 / span 3;
	grid-row: 1 / span 3;
	border-top-right-radius: 150px;
	border-top-left-radius: 0;
	border: 2px solid white;
	border-bottom: none;
`;

export const RoomSpace = styled(RoomBedroom)`
	grid-column: 10 / span 3;
	grid-row: 4 / span 3;
	border-bottom-right-radius: 150px;
	border-bottom-left-radius: 0;
	border: 2px solid white;
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

const infoAnimation = keyframes`
	10% {  transform: scale(1) };
	30% { transform: scale(1.1) };
	50% {transform: scale(1) };
	70% { transform: scale(1.1) };
	100% { transform: scale(1) };
`;

export const InfoIcon = styled(FaInfoCircle)`
	font-size: 16px;
	text-align: center;
	animation: ${infoAnimation} 4s linear;
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

export const QuizIcon = styled(FaQuestion)`
	font-size: 20px;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 40px;
	}
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 16px;
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
	outline: none;
	:hover {
		transform: scale(1.2);
	}
	:focus {
		color: ${props => props.theme.primary}
	}
	@media (min-width: 768px) {
		font-size: 20px;
		top: 12px;
		right: 12px;
	}
`;