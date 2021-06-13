import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridContainer = styled.section`
	display: grid;
	grid-template: repeat(7, 1fr) / repeat(13, 1fr);
	width: 100%;
`;

// Rooms
export const RoomClassroom = styled(Link)`
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

export const RoomBedroom = styled.div`
	grid-column: 1 / span 3;
	grid-row: 4 / span 3;
	border-bottom-left-radius: 200px;
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

export const RoomRestaurant = styled(RoomBedroom)`
	grid-column: 3 / span 2;
	grid-row: 3 / span 2;
	border-radius: 50%;
	z-index: 1;
`;

export const RoomGarden = styled(RoomBedroom)`
	grid-column: 4 / span 3;
	grid-row: 1 / span 3;
	border-radius: 0px;
`;

export const RoomStore = styled(RoomClassroom)`
	grid-column: 4 / span 3;
	grid-row: 4 / span 3;
	border-radius: 0px;
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
	border-top-right-radius: 200px;
	border-top-left-radius: 0px;
`;

export const RoomSpace = styled(RoomBedroom)`
	grid-column: 10 / span 3;
	grid-row: 4 / span 3;
	border-bottom-right-radius: 200px;
	border-bottom-left-radius: 0px;
`;

// Icons
export const Icons = styled.button`
	color: ${(props) => props.theme.textColor};
	font-size: 44px;
	background-color: transparent;
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

export const StartGameButton = styled(Link)`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace";
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.hover};
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
