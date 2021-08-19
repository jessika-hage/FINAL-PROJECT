import styled from 'styled-components/macro';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Small Dialog
export const DialogContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  position: relative;
	padding: 7px;
	font-size: 14px;
	max-width: 300px;
	background-color: ${props => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
`;

export const DialogHeader = styled.div`
  position: absolute;
  border-bottom: 1px solid ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 4px 6px;
  @media (min-width: 768px) {
    padding: 5px 7px;
  }
`;

export const HeaderText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${props => props.theme.textColor};
  margin: 27px 1px 4px 1px;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 14px;
    margin: 30px 2px 7px 2px;
  }
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 15px;
	cursor: pointer;
  @media (min-width: 768px) {
    font-size: 16px;
  }
	:hover, :focus {
		color: ${props => props.theme.secondary};
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	margin-top: 5px;
`;

export const SellButton = styled.button`
	background-color: ${props => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
	font-size: 14px;
	margin: 7px 7px 0 0;
	padding: 5px;
	width: fit-content;
	:hover, :focus {
		background-color: ${props => props.theme.secondary};
	}
`;

export const ConfirmedButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 14px;
	padding: 8px;
  margin: 7px;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const GameButton = styled(ConfirmedButton)`
	margin: 20px 0 0 0;
	border: 2px solid ${(props) => props.theme.hover};
	@media (hover:hover) {
		&:hover {
			background-color: ${(props) => props.theme.hover};
		}
	}
`;

// Big Dialog
export const BigDialogContainer = styled.div`
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

export const CloseIconBig = styled(FaTimes)`
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

export const InfoText = styled.p`
	font-size: 14px;
	margin: 5px 0;
	padding: 0 0 0 5px;
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

// Game Title
export const GameTitleText = styled.h1`
	position: absolute;
	top: 30px;
	left: 20px;
	text-transform: uppercase;
	@media (min-width: 768px) {
		top: 10px;
	}
`;

// GameScore
export const ScoreText = styled(GameTitleText)`
	font-size: 20px;
	top: 75px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 60px;
  }
`;

export const CounterText = styled(ScoreText)`
	top: 100px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 85px;
  }
`;

// Game Finish
export const FinishContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	max-width: 400px;
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
`;

export const FinishText = styled.p`
	font-size: 16px;
	text-align: center;
	margin: 5px 0 0 0;
`;

export const FinishButton = styled.button`
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