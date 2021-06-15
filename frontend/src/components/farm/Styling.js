import styled, { keyframes } from 'styled-components';

const Roller = keyframes`
	0% {
		transform: translate(50, 0);
		transform: rotate(90deg);
	}
  10% {
    transform: translate(-80px, 500);
  }
	25% {
		
    transform: translate(-200px, -360px);
		
  }
  50% {
    transform: translate(-400px, 110px);
		transform: rotate(180deg);
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
		transform: rotate(90deg);
	}
  10% {
    transform: translate(-120px, 770);
  }
	25% {
    transform: translate(100px, -160px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(-90deg);
  }
  75% {
    transform: translate(200, 500px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`

	export const FishWrapper = styled.button`
	z-index: 1;
	position: absolute;
	right: 20%;
	top: 70%;
	left: 80%;
	background-color: transparent;
	animation: ${Roller} 16s linear infinite;

		&:disabled {
		opacity: 0;
	}
	`
export const Icon1 = styled.img`
	width:80px;
	height: 60px;

`;

export const Icon2 = styled.img`
	z-index: 1;
	animation: ${Roller2} 18s linear infinite;
	top: 50%;
	right: 50%;
	left: 50%;
	position: absolute;
`;
export const Icon3 = styled.img`
	z-index: 1;
	animation: ${Roller} 15s linear infinite;
	top: 80%;
	right: 20%;
	left: 80%;
	position: absolute;
`;
export const Icon4 = styled.img`
	z-index: 1;
	animation: ${Roller} 17s linear infinite;
	top: 90%;
	right: 40%;
	left: 60%;
	position: absolute;
`;
export const Icon5 = styled.img`
	z-index: 1;
	animation: ${Roller} 11s linear infinite;
	top: 70%;
	right: 40%;
	left: 60%;
	position: absolute;
`;
export const Icon6 = styled.img`
	z-index: 1;
	animation: ${Roller} 13s linear infinite;
	top: 80%;
	right: 70%;
	left: 30%;
	position: absolute;
`;
export const Icon7 = styled.img`
	z-index: 1;
	width: 40px;
	height: 35px;
	animation: ${Roller} 15s linear infinite;
	top: 70%;
	right: 50%;
	left: 80%;
	position: absolute;
`;
export const Icon8 = styled.img`
	z-index: 1;
	width: 50px;
	height: 45px;
	animation: ${Roller} 7s linear infinite;
	top: 80%;
	right: 50%;
	left: 50%;
	position: absolute;
`;

export const Icon9 = styled.img`
	z-index: 1;
	animation: ${Roller} 18s linear infinite;
	top: 90%;
	right: 50%;
	left: 80%;
	position: absolute;
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

export const TransparentWrapper = styled.button`
	z-index: 5;
	background: transparent;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50%;
`;

export const WaterContainer = styled.div`
	position: relative;
	width: 800px;
	height: 600px;
	display: flex;
	justify-content: center;
	border: 10px solid #68ab9e;
	margin: auto 0;
	background-color: #dcfcf7;
`;

export const MainContainer = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	margin-top: -40px;
	background-color: #d1fff4;
`;

export const DialogText = styled.p`
	font-size: 16px;
`;

export const CounterText = styled(ScoreText)`
	top: 85px;
	left: 22px;
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
