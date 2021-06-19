import styled, { keyframes } from 'styled-components';

export const MainBar = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.secondary};
	position: fixed;
	bottom: 40px;
	left: 0;
	padding: 0;
	color: ${(props) => props.theme.textColor};
	opacity: 0.85;
	width: 100%;
	@media (min-width: 768px) {
		bottom: 0;
	}
`;
const Roller = keyframes`
  5% { opacity: 0; transform: translateX(500px) }
  10% { opacity: 1 }
  95% { opacity: 1 }
  100% { opacity: 0.6; transform: translateX(-1000px) }`;

export const RollingText = styled.div`
	display: flex;
	align-items: center;
	font-size: 11px;
	animation: ${Roller} 25s linear infinite;
	opacity: 0;
	padding: 0;
	overflow: hidden;
	@media (min-width: 1024px) {
		bottom: 14px;
		font-size: 14px;
	}
`;

//Housing
export const HouseImage = styled.img`
	width: 500px;
`;

// Weather
export const WeatherText = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	padding: 10px 20px 10px 10px;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	border-right: 2px solid ${(props) => props.theme.textColor};
`;

export const Button = styled.button`
	padding: 0;
	text-transform: uppercase;
	background-color: transparent;
	font-weight: 400;
	margin-left: 10px;
	color: ${(props) => props.theme.textColor};
	text-decoration: underline;
	@media (min-width: 1024px) {
		font-weight: bold;
	}
`;

export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${(props) => props.theme.textColor};
`;

export const ForecastTitle = styled.h2`
	font-size: 24px;
	text-transform: uppercase;
`;

export const WeatherContainer = styled.div`
	border-bottom: 2px solid ${(props) => props.theme.primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DayText = styled.p`
	font-size: 16px;
	text-transform: uppercase;
`;

// Currency
export const HouseTitle = styled(ForecastTitle)`
	text-align: center;
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	border-bottom: 2px solid ${(props) => props.theme.primary};
	padding: 0;
	margin: 0;
`;

export const HousingText = styled(WeatherText)`
	margin-left: 10px;
	border-right: none;
`;

export const ChangeText = styled(HousingText)`
	margin-left: 15px;
	padding: 0;
`;

export const Text = styled(DayText)`
	text-transform: none;
	display: flex;
	text-align: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BuyButton = styled.button`
	padding: 8px;
	margin-top: 7px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace', serif;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

// Kan användas till housedialog
export const ConfirmationDialog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	max-width: 300px;
	background-color: ${(props) => props.theme.primary};
	border: 3px solid ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
`;

export const ConfirmedButton = styled.button`
	outline: none;
	border: none;
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 14px;
	padding: 8px;
	font-family: 'Trispace', serif;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;
