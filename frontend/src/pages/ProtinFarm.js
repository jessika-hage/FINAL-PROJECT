import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@material-ui/core';

import { updateBadges } from '../reducers/profile';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
// import { Fishes } from '../components/farm/Fishes';

import {
	Icon1,
	Icon2,
	Icon3,
	Icon4,
	Icon5,
	Icon6,
	Icon7,
	Icon8,
	Icon9,
	GameTitle,
	ScoreText,
	TransparentWrapper,
	WaterContainer,
	MainContainer,
	DialogText,
	CounterText,
	DialogContainer,
	StartButton,
	FishWrapper1,
	FishWrapper2,
	FishWrapper3,
	FishWrapper4,
	FishWrapper5,
	FishWrapper6,
	FishWrapper7,
	FishWrapper8,
	FishWrapper9,
} from '../components/farm/Styling';

export const ProtinFarm = () => {
	const [score, setScore] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

	const numOfBadges = Math.round(score / 2);
	const [counter, setCounter] = useState(30);

	const dispatch = useDispatch();
	const history = useHistory();

	// useEffect(() => {
	// 	if (!accessToken) {
	// 		history.push('/signin');
	// 	}
	// }, [accessToken, history]);

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
		setScore(score + 1);
		setDisabled(true);
	};

	return (
		<>
			<Header />
			<Camera />
			<MainContainer>
				<GameTitle>Fish Farm</GameTitle>
				<ScoreText>Catches: {score}</ScoreText>
				<CounterText>00:{counter.toString().padStart(2, '0')}</CounterText>

				<WaterContainer>
					<TransparentWrapper disabled='true'></TransparentWrapper>

					<FishWrapper1 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon1
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper1>
					<FishWrapper2 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon2
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper2>
					<FishWrapper3 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon3
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper3>
					<FishWrapper4 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon4
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper4>
					<FishWrapper5 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon5
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper5>
					<FishWrapper6 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon6
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper6>
					<FishWrapper7 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon7
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper7>
					<FishWrapper8 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon8
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper8>
					<FishWrapper9 onClick={() => setDisabled(true)} disabled={disabled}>
						<Icon9
							src={require('../components/farm/assets/fish.png')}
							onClick={onClickEasy}
						/>
					</FishWrapper9>

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
							You managed to catch {score} fishes which gives you {numOfBadges} badges!
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
