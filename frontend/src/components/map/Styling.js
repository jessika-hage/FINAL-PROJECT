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

// Dialog Info
export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	min-width: 280px;
	max-width: 300px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 500px) {
		max-width: 450px;
		padding: 20px 20px 20px 15px;
	}
`;

export const InfoTitle = styled.h2`
	font-size: 24px;
	text-transform: uppercase;
	display: flex;
  align-items: center;
  justify-content: space-between;
	margin: 0 0 5px 0;
	padding: 0 0 5px 5px;
	border-bottom: 2px solid ${(props) => props.theme.primary};
`;

export const InfoText = styled.p`
	font-size: 14px;
	margin: 5px 0;
	padding: 0 0 0 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const DialogButton = styled.button`
	padding: 5px;
	margin-top: 10px;
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
	&:disabled {
		opacity: 0.3;
		:hover {
			background-color: ${props => props.theme.primary}
		}
	}
	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

export const List = styled.ul`
	list-style-type: square;
	padding: 0 20px;
	margin: 5px 0 0 0;
`;

export const ListItem = styled.li`
	font-size: 12px;
	margin: 5px 0;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const StartGameButton = styled(Link)`
	padding: 10px 15px;
	margin-top: 15px;
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

// Info
export const InfoContainer = styled(DialogContainer)`
	padding: 15px;
`;

export const ShipInfo = styled(InfoTitle)`
	margin: 5px;
`;

export const InfoPage = styled.div`
	padding: 10px 10px 50px 10px;
`;

export const PageTitle = styled.h3`
	font-size: 14px;
	text-align: left;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const TextInfo = styled.p`
	font-size: 12px;
	text-align: left;
	// padding: 30px 30px 100px 30px;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const MoveText = styled.p`
	font-size: 12px;
`;

export const InfoItem = styled.div`
	display: flex;
	align-items: center;
	margin: 5px 0;
	font-size: 12px;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const Fish = styled(FaFish)`
	font-size: 30px;
`;

export const Math = styled(FaSquareRootAlt)`
	font-size: 30px;
`;

export const CoinsIcon = styled.img`
	margin: 0 5px 0 0;
	width: 20px;
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: 80PX;
  border: 1px solid ${props => props.theme.secondary};
	margin: 0 7px 0 0;
`;

export const ProgressFiller = styled.div`
  background: ${props => props.theme.hover};
  width: 50%;
  height: 100%;
`;

export const BottomText = styled.div`
	margin-top: 12px;
`;

export const EndText = styled.p`
	font-size: 12px;
	margin: 5px 0 0 0;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const EndTextName = styled(EndText)`
	font-size: 10px;
	@media (min-width: 768px) {
		font-size: 12px;
	}
`;

export const Email = styled.a`
	font-size: 10px;
	text-decoration: underline;
	color: ${props => props.theme.textColor};
	cursor: pointer;
	margin: 0;
	:hover {
		color: ${props => props.theme.primary};
	}
	@media (min-width: 768px) {
		font-size: 12px;
	}
`;