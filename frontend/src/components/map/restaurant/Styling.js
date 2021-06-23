import styled from 'styled-components';
import { FaTimes, FaInfoCircle } from 'react-icons/fa';

// Restaurant
export const Title = styled.h4`
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

export const IconContainer = styled.div`
	display: flex;
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 17px;
	cursor: pointer;
	margin-left: 5px;
	outline: none;
	:hover {
		transform: scale(1.2);
	}
	:focus {
		color: ${props => props.theme.secondary};
		transform: scale(1.2);
	}
`;

export const SmallInfoIcon = styled(FaInfoCircle)`
	font-size: 16px;
	cursor: pointer;
	outline: none;
	:hover {
		transform: scale(1.2);
	}
	:focus {
		color: ${props => props.theme.secondary};
		transform: scale(1.2);
	}
`;

export const TableContainer = styled.div`
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

export const TableHead = styled.div`
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

export const TableTitle = styled.div`
	width: 20%;
	padding: 0 0 5px 5px;
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	font-size: 14px;
`;

export const TableTitleHide = styled(TableTitle)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Food = styled.p`
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

export const FoodType = styled(Food)`
	text-align: left;
`;

export const FoodHide = styled(Food)`
	display: none;
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const FoodList = styled.div`
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

export const BuyFood = styled.button`
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

// Dialogs
export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	display: flex;
	flex-direction: column;
	max-width: 300px;
	justify-content: center;
	padding: 15px;
	color: ${(props) => props.theme.textColor};
`;

export const InfoContainer = styled(DialogContainer)`
	max-width: 300px;
	font-size: 14px;
  @media (min-width: 768px) {
		max-width: 400px;
	}
`;

export const InfoText = styled.p`
	font-size: 12px;
	margin: 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;