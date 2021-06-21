import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@material-ui/core';

import { BadgesAnimation } from '../../components/animations/BadgesAnimation';
import { updateBadges, updateHighscoreFish } from '../../reducers/profile';
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
	Icon10,
	Icon11,
	Icon12,
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
	FishWrapper10,
	FishWrapper11,
	FishWrapper12,
} from './Styling';

export const FarmDesktop = () => {
	const [score, setScore] = useState(0);
	const [disabled1, setDisabled1] = useState(false);
	const [disabled2, setDisabled2] = useState(false);
	const [disabled3, setDisabled3] = useState(false);
	const [disabled4, setDisabled4] = useState(false);
	const [disabled5, setDisabled5] = useState(false);
	const [disabled6, setDisabled6] = useState(false);
	const [disabled7, setDisabled7] = useState(false);
	const [disabled8, setDisabled8] = useState(false);
	const [disabled9, setDisabled9] = useState(false);
	const [disabled10, setDisabled10] = useState(false);
	const [disabled11, setDisabled11] = useState(false);
	const [disabled12, setDisabled12] = useState(false);
	const [animation, setAnimation] = useState(false);

	const accessToken = useSelector((store) => store.profile.accessToken);
	const highscore = useSelector((store) => store.profile.highscoreFish);
	const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

	const numOfBadges = Math.round(score);
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
		if (score > highscore) {
			dispatch(updateHighscoreFish(score));
		}
		dispatch(updateBadges(numOfBadges));
		setAnimation(true);
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};

	useEffect(() => {
		if (counter === 0) {
			setOpenFinishedDialog(true);
		}
	}, [counter]);

	const onClick1 = () => {
		setScore(score + 1);
		setDisabled1(true);
	};
	const onClick2 = () => {
		setScore(score + 1);
		setDisabled2(true);
	};
	const onClick3 = () => {
		setScore(score + 1);
		setDisabled3(true);
	};
	const onClick4 = () => {
		setScore(score + 1);
		setDisabled4(true);
	};
	const onClick5 = () => {
		setScore(score + 1);
		setDisabled5(true);
	};
	const onClick6 = () => {
		setScore(score + 1);
		setDisabled6(true);
	};
	const onClick7 = () => {
		setScore(score + 1);
		setDisabled7(true);
	};
	const onClick8 = () => {
		setScore(score + 1);
		setDisabled8(true);
	};
	const onClick9 = () => {
		setScore(score + 1);
		setDisabled9(true);
	};
	const onClick10 = () => {
		setScore(score + 1);
		setDisabled10(true);
	};
	const onClick11 = () => {
		setScore(score + 1);
		setDisabled11(true);
	};
	const onClick12 = () => {
		setScore(score + 1);
		setDisabled12(true);
	};

	return (
		<>
			<MainContainer>
				<GameTitle>Fish Farm</GameTitle>
				<ScoreText>Catches: {score}</ScoreText>
				<CounterText>00:{counter.toString().padStart(2, '0')}</CounterText>
				<WaterContainer>
					<TransparentWrapper disabled1='true'></TransparentWrapper>
					<FishWrapper1 onClick={() => setDisabled1(true)} disabled={disabled1}>
						<Icon1 onClick={onClick1} />
					</FishWrapper1>
					<TransparentWrapper disabled2='true'></TransparentWrapper>
					<FishWrapper2 onClick={() => setDisabled2(true)} disabled={disabled2}>
						<Icon2 onClick={onClick2} />
					</FishWrapper2>
					<TransparentWrapper disabled3='true'></TransparentWrapper>
					<FishWrapper3 onClick={() => setDisabled3(true)} disabled={disabled3}>
						<Icon3 onClick={onClick3} />
					</FishWrapper3>
					<TransparentWrapper disabled4='true'></TransparentWrapper>
					<FishWrapper4 onClick={() => setDisabled4(true)} disabled={disabled4}>
						<Icon4 onClick={onClick4} />
					</FishWrapper4>
					<TransparentWrapper disabled5='true'></TransparentWrapper>
					<FishWrapper5 onClick={() => setDisabled5(true)} disabled={disabled5}>
						<Icon5 onClick={onClick5} />
					</FishWrapper5>
					<TransparentWrapper disabled6='true'></TransparentWrapper>
					<FishWrapper6 onClick={() => setDisabled6(true)} disabled={disabled6}>
						<Icon6 onClick={onClick6} />
					</FishWrapper6>
					<TransparentWrapper disabled7='true'></TransparentWrapper>
					<FishWrapper7 onClick={() => setDisabled7(true)} disabled={disabled7}>
						<Icon7 onClick={onClick7} />
					</FishWrapper7>
					<TransparentWrapper disabled8='true'></TransparentWrapper>
					<FishWrapper8 onClick={() => setDisabled8(true)} disabled={disabled8}>
						<Icon8 onClick={onClick8} />
					</FishWrapper8>
					<TransparentWrapper disabled9='true'></TransparentWrapper>
					<FishWrapper9 onClick={() => setDisabled9(true)} disabled={disabled9}>
						<Icon9 onClick={onClick9} />
					</FishWrapper9>
					<TransparentWrapper disabled10='true'></TransparentWrapper>
					<FishWrapper10 onClick={() => setDisabled10(true)} disabled={disabled10}>
						<Icon10 onClick={onClick10} />
					</FishWrapper10>
					<TransparentWrapper disabled11='true'></TransparentWrapper>
					<FishWrapper11 onClick={() => setDisabled11(true)} disabled={disabled11}>
						<Icon11 onClick={onClick11} />
					</FishWrapper11>
					<TransparentWrapper disabled12='true'></TransparentWrapper>
					<FishWrapper12 onClick={() => setDisabled12(true)} disabled={disabled12}>
						<Icon12 onClick={onClick12} />
					</FishWrapper12>

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
			{animation && <BadgesAnimation text={numOfBadges} />}
		</>
	);
};
