import styled, { keyframes } from 'styled-components';
import { FaFish } from 'react-icons/fa';

export const DesktopContainer = styled.div`
	display: none;
	@media (min-width: 500px) {
		display: flex;
	}
`;

//Phone wiev
export const PhoneContainer = styled.div`
	@media (min-width: 500px) {
		display: none;
	}
`;

export const ShowMobile = styled.div`
	z-index: 1;
	position: absolute;
	top: 300;
	bottom: 0;
	width: 100%;
	height: 50%;
	background-color: #9de2fa;
`;

export const BorderContainer = styled.div`
	bottom: 0;
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;
	position: relative;
	display: flex;
	justify-content: center;
	margin: 0 0 0 0;
	background-color: #dcfcf7;
`;

const X = keyframes`
  0% {
            transform: translate(-100px, 0);
  }
  100% {
            transform: translate(100px, 0)
  }
`;

const Y = keyframes`
  25% {
    transform: translate(0, -30px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 20px);
  }
`;

export const RoundWrapper = styled.div`
	z-index: 3;
	margin-top: 150px;
	position: absolute;
	animation: ${X} 1s ease-in-out alternate infinite 0s both;
`;
export const RoundWrapper2 = styled(RoundWrapper)`
	z-index: 3;
	animation: ${X} 2s ease-in-out alternate infinite 0s both;
`;
export const RoundWrapper3 = styled(RoundWrapper)`
	z-index: 3;
	animation: ${X} 3s ease-in-out alternate infinite 0s both;
`;
export const Round1 = styled.div`
	z-index: 1;
	background-color: #9de2fa;
	border-radius: 100%;
	height: 150px;
	margin: 40px;
	width: 500px;
	animation: ${Y} 3s linear infinite 0s;
`;
export const Round2 = styled(Round1)`
	animation: ${Y} 3s linear infinite 0s;
	width: 450px;
`;
export const Round3 = styled(Round1)`
	animation: ${Y} 4s linear infinite 0s;
	width: 550px;
`;

//fishes
const Roller = keyframes`
	0% {
		transform: translate(50, 0);
		transform: rotate(-90deg);
	}
  10% {
    transform: translate(-80px, 500);
  }
	25% {
		
    transform: translate(-200px, -360px);
		
  }
  50% {
    transform: translate(-400px, 110px);
		transform: rotate(-180deg);
  }
  75% {
    transform: translate(200, 500px);
		
  }
	100% {
		transform: translate(50, 0)
	}
	;`;

const Roller2 = keyframes`
	0% {
		transform: translate(0, 0);
		transform: rotate(-90deg);
	}
  10% {
    transform: translate(-120px, 770);
  }
	25% {
    transform: translate(100px, -160px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(90deg);
  }
  75% {
    transform: translate(200, 500px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`;

export const FishWrapper1 = styled.button`
	z-index: 1;
	position: absolute;
	background-color: transparent;
	right: 20%;
	top: 70%;
	left: 80%;

	animation: ${Roller} 11s linear infinite;

	&:disabled {
		opacity: 0;
	}
`;
export const Icon1 = styled(FaFish)`
	font-size: 40px;
	opacity: 0.5;
	color: #73bed9;
`;

export const FishWrapper2 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller2} 7s linear infinite;
	top: 50%;
	right: 50%;
	left: 50%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
		width: 80px;
		height: 100px;
	}
`;
export const Icon2 = styled(FaFish)`
	font-size: 40px;
	opacity: 0.5;
	color: #73bed9;
`;

export const FishWrapper3 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 10s linear infinite;
	top: 80%;
	right: 20%;
	left: 80%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon3 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 40px;
`;

export const FishWrapper4 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 12s linear infinite;
	top: 90%;
	right: 40%;
	left: 60%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon4 = styled(FaFish)`
	font-size: 40px;
	color: #73bed9;
	opacity: 0.5;
`;

export const FishWrapper5 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 7s linear infinite;
	top: 70%;
	right: 40%;
	left: 60%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon5 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 30px;
`;

export const FishWrapper6 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 13s linear infinite;
	top: 80%;
	right: 70%;
	left: 30%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon6 = styled(FaFish)`
	font-size: 25px;
	opacity: 0.5;
	color: #73bed9;
`;

export const FishWrapper7 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 15s linear infinite;
	top: 70%;
	right: 50%;
	left: 80%;
	position: absolute;
	height: 50px;
	width: 50px;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon7 = styled(FaFish)`
	font-size: 30px;
	opacity: 0.5;
	color: #73bed9;
`;

export const FishWrapper8 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 7s linear infinite;
	top: 80%;
	right: 50%;
	left: 50%;
	position: absolute;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon8 = styled(FaFish)`
	font-size: 30px;
	opacity: 0.5;
	color: #73bed9;
`;

export const FishWrapper9 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 10s linear infinite;
	top: 90%;
	right: 50%;
	left: 80%;
	position: absolute;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon10 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 50px;
`;
export const FishWrapper10 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 13s linear infinite;
	top: 90%;
	right: 50%;
	left: 80%;
	position: absolute;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon11 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 50px;
`;
export const FishWrapper11 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 9s linear infinite;
	top: 80%;
	right: 30%;
	left: 70%;
	position: absolute;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon12 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 50px;
`;
export const FishWrapper12 = styled.button`
	background-color: transparent;
	z-index: 1;
	animation: ${Roller} 8s linear infinite;
	top: 70%;
	right: 50%;
	left: 50%;
	position: absolute;
	&:disabled {
		opacity: 0;
	}
`;
export const Icon9 = styled(FaFish)`
	color: #73bed9;
	opacity: 0.5;
	font-size: 50px;
`;

export const TransparentWrapper = styled.button`
	z-index: 5;
	background: transparent;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50%;
`;

//Phone and desktop
export const GameTitle = styled.h1`
	z-index: 5;
	position: absolute;
	top: 30px;
	left: 20px;
	text-transform: uppercase;
`;

export const ScoreText = styled(GameTitle)`
	z-index: 5;
	font-size: 16px;
	top: 80px;
	left: 22px;
	@media (min-width: 768px) {
		font-size: 20px;
	}
`;
export const CounterText = styled(ScoreText)`
	z-index: 5;
	top: 105px;
	left: 22px;
`;

export const WaterContainer = styled.div`
	@media (min-width: 500px) {
		position: relative;
		display: flex;
		justify-content: center;
		margin: 0 0 0 0;
		background-color: #dcfcf7;
		width: 800px;
		height: 600px;
		border: 10px solid #68ab9e;
	}
`;

export const MainContainer = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	background-color: #d1fff4;
`;

export const DialogText = styled.p`
	font-size: 16px;
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
