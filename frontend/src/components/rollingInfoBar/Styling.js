import styled, { keyframes } from 'styled-components';

export const MainBar = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.secondary};
	position: fixed;
	bottom: 60px;
	left: 0;
	padding: 0;
	color: ${(props) => props.theme.textColor};
	opacity: 0.85;
	width: 100%;
	overflow: hidden;
	@media (min-width: 768px) {
		bottom: 0;
	}
`;

const Roller = keyframes`
  5% { opacity: 0; transform: translateX(100%) }
  10% { opacity: 1 }
  95% { opacity: 1 }
  100% { opacity: 0.6; transform: translateX(-100%) }`;

export const RollingText = styled.div`
	display: flex;
	align-items: center;
	font-size: 11px;
	animation: ${Roller} 20s linear infinite;
	opacity: 0;
	padding: 0;
	width: 100%;
	@media (min-width: 768px) {
		animation: ${Roller} 30s linear infinite;
	}
	@media (min-width: 1024px) {
		bottom: 14px;
		font-size: 15px;
	}
`;

// Weather
export const WeatherText = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	padding: 10px 8px 10px 0;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	border-right: 2px solid ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		font-size: 14px;
		padding: 10px 10px 10px 0;
	}
`;

export const Button = styled.button`
	padding: 0;
	text-transform: uppercase;
	background-color: transparent;
	font-weight: 400;
	margin-left: 5px;
	font-size: 11px;
	color: ${(props) => props.theme.textColor};
	text-decoration: underline;
	@media (min-width: 768px) {
		font-weight: bold;
		margin-left: 10px;
		font-size: 15px;
	}
`;

export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	padding: 10px;
	max-width: 300px;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		max-width: 400px;
		padding: 20px;
	}
`;

export const ForecastTitle = styled.h2`
	font-size: 18px;
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 22px;
	}
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

//Housing
export const HouseImage = styled.img`
	width: 200px;
	@media (min-width: 768px) {
		width: 250px;
	}
`;
export const Title = styled.h1`
	margin: 5 0 0 0;
	font-size: 18px;
	@media (min-width: 768px) {
		font-size: 20px
	}
`;

export const HouseContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 40px;
`;

export const HousingText = styled(WeatherText)`
	margin-left: 8px;
	border-right: none;
	@media (min-width: 768px) {
		margin-left: 10px;
	}
`;

export const PriceContainer = styled.div`
	padding-top: 10px;
`;

export const HouseTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 0;
	padding-bottom: 10px;
`;

export const HouseText = styled.p`
	font-size: 13px;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 15px;
	}
`;

export const HouseTitle = styled(ForecastTitle)`
	text-align: center;
`;

// Currency

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	border-bottom: 2px solid ${(props) => props.theme.primary};
	padding: 0;
	margin: 0;
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
