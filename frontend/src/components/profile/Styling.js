import styled, { keyframes } from 'styled-components';
import { FaArrowUp, FaArrowDown, FaExclamationTriangle } from 'react-icons/fa';

// Profile Stats
export const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
  padding: 5px;
  margin: 0 10px;
	border-bottom: 1px solid ${(props) => props.theme.primary};
`;

export const ProfileAvatar = styled.img`
	width: 60px;
	height: 60px;
	padding: 2px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.secondary};
	margin: 0 0 0 6px;
	@media (min-width: 768px) {
		width: 120px;
		height: 120px;
		padding: 4px;
	}
`;

export const StatusContainer = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
`;

export const Username = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin: 7px 0 0 3px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const BadgesText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
  padding: 15px 15px;
	position: absolute;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const CoinsText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	padding: 15px 15px;
	position: absolute;
	top: 0;
	right: 0;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BadgeIcon = styled.img`
	margin: 0 5px 0 0;
`;

export const CoinsIcon = styled.img`
	margin: 0 0 0 7px
`;

// Ranking Progress Bar
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 0 0 10px 0;
`; 

export const ProgressBar = styled.div`
  height: 8px;
  width: 100%;
  border: 1px solid ${props => props.theme.secondary};
`;

export const ProgressFiller = styled.div`
  background: ${props => props.theme.hover};
  width: 100%;
  height: 100%;
  transition: width 0.5s linear;
`;

export const ProgressText = styled.p`
  font-size: 10px;
  margin: 0 2px 4px 0;
  color: ${props => props.theme.textColor};
`;

// Profile 
export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
  align-items: center;
	min-height: 100vh;
	background-color: ${props => props.theme.backgroundColor};
  padding: 10px 10px;
  max-width: 350px;
	min-width: 300px;
	overflow: scroll;
	&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.secondary};
  }
	@media (min-width: 768px) {
		max-width: 450px;
	}
`;

export const DaysContainer = styled(StatusContainer)`
  display: flex;
  flex-direction: column;
	justify-content: center;
  align-items: flex-start;
	margin: 0;
  padding: 7px 5px;
	border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

export const DaysText = styled.div`
  margin: 0;
  padding: 3px 0;
	display: flex;
	align-items: center;
	font-family: 'OPen Sans';
	font-size: 12px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BottomContainer = styled.div`
	display: flex;
  flex-direction: column;
	justify-content: center;
  margin: 0 10px;
  width: 100%;
`;

export const Items = styled.div`
  padding: 10px 5px;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Investments = styled(Items)`
	border-bottom: none;
`;

export const ContainerTitle = styled(Username)`
	font-size: 15px;
	margin: 7px 0 5px 3px;
`;

// Buttons
export const ButtonContainer = styled.div`
	display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 10px 3px 7px 3px;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0px;
	z-index: 1;
	background-color: ${props => props.theme.primary};
	border-top: 1px solid ${(props) => props.theme.secondary};
`;

export const ButtonSignOut = styled.button`
	background-color: transparent;
	font-size: 30px;
	padding: 0 10px 0 0;
	color: ${props => props.theme.textColor};
	:hover {
		color: ${props => props.theme.hover};
	}
`;

export const ButtonSettings = styled(ButtonSignOut)`
	padding: 0 0 0 10px;
`;

// Items Profile
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 5px 0;
  margin: 0;
  width: fit-content;
	font-family: 'Open Sans', serif;
`;

export const ItemsTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 0 0 0 3px;
  padding: 0;
`;

export const ItemsQuantity = styled(ItemsTitle)`
  margin: 0 0 0 5px;
`;

// InvestmentProfile
export const SellButton = styled.button`
	background-color: ${props => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
	font-size: 14px;
	margin-top: 7px;
	padding: 5px;
	width: fit-content;
	:hover {
		background-color: ${props => props.theme.secondary};
	}
`;

export const InvestmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Open Sans', serif;
`;

export const InvestmentText = styled(ItemsTitle)`
	margin: 3px;
`;

export const InvestmentChange = styled(InvestmentText)`
	display: flex;
	flex-direction: column;
	margin: 5px 0 5px 3px;
`;

export const IconUp = styled(FaArrowUp)`
	margin: 4px 5px 0 0;
`;

export const IconDown = styled(FaArrowDown)`
	margin: 4px 5px 0 0;
`;

export const ValueChange = styled(InvestmentText)`
	margin: 5px 35px 0 0;
	${props =>
		props.percent ?
		`color: #e83715;`
		:  
		`color: #6DD704;`
	};
`;

export const ChangeBox = styled.span`
	display: flex;
	align-items: center;
	margin: 0;
`;

// Energy Profile
export const EnergyContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const EnergyText = styled(ItemsTitle)`
	margin: 5px 0 0 3px;
	font-family: 'Open Sans', serif;
`;

const alert = keyframes`
	from { transform: scale(1) }
	to { transform: scale(1.2) }
`;

export const AlertIcon = styled(FaExclamationTriangle)`
	color: red;
	animation: ${alert} 1s linear infinite alternate-reverse;
	margin-left: 10px;
	cursor: pointer;
`;

export const AlertContainer = styled.div`
	background-color: ${props => props.theme.primary};
	border: 2px solid ${props => props.theme.secondary};
	max-width: 250px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;