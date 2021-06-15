import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	margin-top: -40px;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.backgroundColor};
`;

export const DialogContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
`;

export const DialogText = styled.p`
	font-size: 16px;
`;

export const StartButton = styled.button`
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

export const GameTitle = styled.h1`
	position: absolute;
	top: 10px;
	left: 20px;
	text-transform: uppercase;
`;

export const ScoreText = styled(GameTitle)`
	font-size: 20px;
	top: 60px;
	left: 22px;
`;

export const CounterText = styled(ScoreText)`
	top: 85px;
	left: 22px;
`;

const Button = styled.button`
	:hover {
		opacity: 0.7;
	}
	:focus {
		transform: scale(1.8);
	}
`;

const animationOne = keyframes`
  0% { transform: scale(1.2); transform: translateY(500px)}
  10% { transform: scale(1.2); transform: translateY(-500px)}
  20% { transform: scale(1.3); transform: translateY(600px)}
  30% { transform: scale(1.4); transform: translateX(400px)}
  40% { transform: scale(1.6); transform: translateY(-400px)}
  50% { transform: scale(0.8); transform: translateY(400px)}
  55% { transform: scale(0.8); transform: translateY(-400px)}
  60% { transform: scale(0.6); transform: translateX(400px)}
  70% { transform: scale(1.5); transform: translateX(-500px)}
  80% { transform: scale(3); transform: translateY(500px)}
  90% { transform: scale(3); transform: translateX(400px)}
  100% { transform: scale(3); transform: translateY(-500px)}
  `
export const ButtonOne = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.hover};
  animation: ${animationOne} 16s linear infinite alternate-reverse;
  :hover {
    opacity: 0.6;
  }
`;

const animationTwo = keyframes`
  0% { transform: translateY(-600px)}
  10% { transform: translateX(0px)}
  20% { transform: translateY(-400px)}
  30% { transform: translateY(300px)}
  40% { transform: translateX(500px)}
  50% { transform: translateY(-300px)}
  60% { transform: translateX(-400px)}
  70% { transform: translateX(500px)}
  80% { transform: translateY(100px)}
  90% { transform: translateX(-300px)}
  100% { transform: translateY(500px)}
  `;

export const ButtonTwo = styled.button`
  background-color: ${props => props.theme.secondary};
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${animationTwo} 13s linear infinite alternate-reverse;
  :hover {
    opacity: 0.6;
  }
`;

 const animationThree = keyframes`
  0% { transform: translateX(300px)}
  10% { transform: translateX(-500px)}
  20% { transform: translateX(200px)}
  30% { transform: translateX(600px)}
  40% { transform: translateY(-600px)}
  50% { transform: translateX(-500px)}
  60% { transform: translateX(-100px)}
  70% { transform: translateY(500px)}
  80% { transform: translateY(-300px)}
  90% { transform: translateX(400px)}
  100% { transform: translateY(500px)}
`;

export const ButtonThree = styled.button`
	background-color: ${(props) => props.theme.primary};
	width: 200px;
	height: 200px;
	border-radius: 50%;
	animation: ${animationThree} 12s linear infinite alternate-reverse;
`;

 const animationFour = keyframes`
  0% { transform: translateX(0px)}
  10% { transform: translateX(200px)}
  20% { transform: translateY(500px)}
  30% { transform: translateX(-400px)}
  40% { transform: translateY(200px)}
  50% { transform: translateX(200px)}
  60% { transform: translateX(600px)}
  70% { transform: translateY(500px)}
  80% { transform: translateY(-300px)}
  90% { transform: translateX(400px)}
  100% { transform: translateY(500px)}
`;

export const ButtonFour = styled.button`
	background-color: ${(props) => props.theme.primary};
	width: 160px;
	height: 160px;
	border-radius: 50%;
	animation: ${animationFour} 13s linear infinite alternate-reverse;
`;

const animationFive = keyframes`
  0% { transform: scale(1.2); transform: translateX(100px)}
  10% { transform: scale(1.2); transform: translateX(-600px)}
  20% { transform: scale(1.3); transform: translateY(-300px)}
  30% { transform: scale(1.4); transform: translateX(400px)}
  40% { transform: scale(1.6); transform: translateY(600px)}
  50% { transform: scale(1.8); transform: translateY(100px)}
  60% { transform: scale(1.9); transform: translateX(-400px)}
  70% { transform: scale(1.5); transform: translateY(-500px)}
  80% { transform: scale(1.3); transform: translateY(400px)}
  85% { transform: scale(1.3); transform: translateY(-400px)}
  90% { transform: scale(1.4); transform: translateX(400px)}
  100% { transform: scale(1); transform: translateY(-600px)}
`;

export const ButtonFive = styled.button`
  position: absolute;
  bottom: 50%;
  left: 50%;
  background-color: ${props => props.theme.hover};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  animation: ${animationFive} 10s linear infinite alternate-reverse;
`;
