import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Wave from 'react-wavify';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@material-ui/core';

import { updateBadges } from '../reducers/profile';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';

export const ProtinFarm = () => {
	const [score, setScore] = useState(0);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

	const numOfBadges = Math.round(score / 2);
	const [counter, setCounter] = useState(30);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	const onCollectBadges = () => {
		dispatch(updateBadges(numOfBadges));
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};

	useEffect(() => {
		if (counter === 0) {
			setOpenFinishedDialog(true);
		}
	}, [counter]);

	const onClickEasy = () => {
		setScore(score + 2);
	};

	return (
		<>
			<Header />
			<Camera />
			<MainContainer>
				<GameTitle>Fish Farm</GameTitle>
				<ScoreText>Score: {score}</ScoreText>
				<CounterText>00:{counter.toString().padStart(2, '0')}</CounterText>

				<WaterContainer>
					<TransparentWrapper disabled='true'></TransparentWrapper>
					<Icon1
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon2
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon3
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon4
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon5
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon6
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon7
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon8
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>
					<Icon9
						src={require('../components/store/assets/fish.png')}
						onClick={onClickEasy}
					/>

					<Wave
						fill='#73bed9'
						paused={false}
						options={{
							height: 200,
							amplitude: 50,
							speed: 0.15,
							points: 3,
							opacity: 0.4,
						}}
					/>
				</WaterContainer>
				<Dialog open={openFinishedDialog}>
					<DialogContainer>
						<DialogText>
							You managed to get {score} points which is {numOfBadges} badges!
						</DialogText>
						<StartButton onClick={onCollectBadges}>
							{score > 0 ? 'Collect badges' : 'Sorry, no badges this time'}
						</StartButton>
					</DialogContainer>
				</Dialog>
			</MainContainer>
		</>
	);
};

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
	;`;

const Icon1 = styled.img`
	z-index: 1;
	width: 40px;
	height: 35px;
	animation: ${Roller} 16s linear infinite;
	top: 70%;
	right: 20%;
	left: 80%;
	position: absolute;
`;
const Icon2 = styled.img`
	z-index: 1;
	animation: ${Roller2} 18s linear infinite;
	top: 50%;
	right: 50%;
	left: 50%;
	position: absolute;
`;
const Icon3 = styled.img`
	z-index: 1;
	animation: ${Roller} 15s linear infinite;
	top: 80%;
	right: 20%;
	left: 80%;
	position: absolute;
`;
const Icon4 = styled.img`
	z-index: 1;
	animation: ${Roller} 13s linear infinite;
	top: 90%;
	right: 40%;
	left: 60%;
	position: absolute;
`;
const Icon5 = styled.img`
	z-index: 1;
	animation: ${Roller} 13s linear infinite;
	top: 70%;
	right: 40%;
	left: 60%;
	position: absolute;
`;
const Icon6 = styled.img`
	z-index: 1;
	animation: ${Roller} 5s linear infinite;
	top: 80%;
	right: 70%;
	left: 30%;
	position: absolute;
`;
const Icon7 = styled.img`
	z-index: 1;
	width: 40px;
	height: 35px;
	animation: ${Roller} 5s linear infinite;
	top: 70%;
	right: 50%;
	left: 80%;
	position: absolute;
`;
const Icon8 = styled.img`
	z-index: 1;
	width: 50px;
	height: 45px;
	animation: ${Roller} 7s linear infinite;
	top: 80%;
	right: 50%;
	left: 50%;
	position: absolute;
`;
const Icon9 = styled.img`
	z-index: 1;
	animation: ${Roller} 8s linear infinite;
	top: 90%;
	right: 50%;
	left: 80%;
	position: absolute;
`;

const GameTitle = styled.h1`
	position: absolute;
	top: 10px;
	left: 20px;
	text-transform: uppercase;
`;

const ScoreText = styled(GameTitle)`
	font-size: 20px;
	top: 60px;
	left: 22px;
`;

const TransparentWrapper = styled.button`
	z-index: 5;
	background: transparent;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50%;
`;

const WaterContainer = styled.div`
	position: relative;
	width: 800px;
	height: 600px;
	display: flex;
	justify-content: center;
	border: 10px solid #68ab9e;
	margin: auto 0;
	background-color: #dcfcf7;
`;

const MainContainer = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	margin-top: -40px;
	background-color: #d1fff4;
`;

const DialogText = styled.p`
	font-size: 16px;
`;

const CounterText = styled(ScoreText)`
	top: 85px;
	left: 22px;
`;

const DialogContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: ${(props) => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.textColor};
`;
const StartButton = styled.button`
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
