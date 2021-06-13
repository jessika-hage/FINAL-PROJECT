import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateBadges } from '../reducers/profile';
import { ProgressBar } from '../components/math/ProgressBar';
import { MathForm } from '../components/math/MathForm';
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
import { FinishGame } from '../components/math/FinishGame';
import { BadgesAnimation } from '../components/animations/BadgesAnimation';
import { MathStart } from '../components/math/MathStart';

export const MathGame = () => {
	const [openStart, setOpenStart] = useState(true);
	const [open, setOpen] = useState(false);
	const [score, setScore] = useState(0);
	const [mistakes, setMistakes] = useState(0);
	const [counter, setCounter] = useState(30);
	const [currentProblem, setCurrentProblem] = useState(generateProblem());
	const [userAnswer, setUserAnswer] = useState('');
	const [showError, setShowError] = useState(false);
	const [animation, setAnimation] = useState(false);
	const answerField = useRef(null);
	const resetButton = useRef(null);
	const accessToken = useSelector((store) => store.profile.accessToken);

	const dispatch = useDispatch();
	const history = useHistory();

	// useEffect(() => {
	// 	if (!accessToken) {
	// 		history.push('/signin');
	// 	}
	// }, [accessToken, history]);

	  // Initializing the timer
		useEffect(() => {
			const timer =
				counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
				return () => clearInterval(timer);
		}, [counter]);

	// Opens dialog when game is finished
	useEffect(() => {
		if (score === 10 || mistakes === 3 || counter === 0) {
			setOpen(true);
		}
	}, [score, mistakes, counter]);

	function generateNumber(max) {
		return Math.floor(Math.random() * (max + 1));
	}

	function generateProblem() {
		return {
			numberOne: generateNumber(20),
			numberTwo: generateNumber(20),
			operator: ['+', '-', 'x'][generateNumber(2)],
		};
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let correctAnswer;

		if (currentProblem.operator === '+')
			correctAnswer = currentProblem.numberOne + currentProblem.numberTwo;
		if (currentProblem.operator === '-')
			correctAnswer = currentProblem.numberOne - currentProblem.numberTwo;
		if (currentProblem.operator === 'x')
			correctAnswer = currentProblem.numberOne * currentProblem.numberTwo;

		if (correctAnswer === parseInt(userAnswer, 10)) {
			setScore((prev) => prev + 1);
			setCurrentProblem(generateProblem());
			setUserAnswer('');
		} else {
			setMistakes((prev) => prev + 1);
			setShowError(true);
			setTimeout(() => setShowError(false), 400);
		}
	};

	const resetGame = () => {
		if (score > 0) {
			dispatch(updateBadges(score));
			setAnimation(true)
			setOpen(false);
			setTimeout(() => {
				setScore(0);
				setMistakes(0);
				setUserAnswer('');
				setCurrentProblem(generateProblem());
				history.push('/')
			}, 1000)
		} else {
			history.push('/');
		}	
	};

	return (
		<MainContainer>
			<Header />
			<Camera />
			<MathTitle>Classroom</MathTitle>
			<MathContainer blurred={mistakes === 3 || score === 10}>
				<TimerContainer>00:{counter.toString().padStart(2, '0')}</TimerContainer>
				<MathProblem wrongAnswer={showError}>
					{currentProblem.numberOne} {currentProblem.operator}{' '}
					{currentProblem.numberTwo}
				</MathProblem>
				<MathForm
					handleSubmit={handleSubmit}
					answerField={answerField}
					value={userAnswer}
					onChange={(e) => setUserAnswer(e.target.value)}
				/>
				<StatusText>
					You need {10 - score} more points, and are allowed to make {2 - mistakes}{' '}
					more mistakes.
				</StatusText>
				<ProgressBar score={score} />
			</MathContainer>
			<FinishGame
				open={open}
				endText={score}
				resetButton={resetButton}
				onClick={resetGame}
				buttonText={score > 0 ? 'Collect badges' : 'Try again later'}
			/>
			{ animation && <BadgesAnimation text={score} /> }
		</MainContainer>
	);
};

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	width: 100%;
	height: 100vh;
	overflow: auto;
	margin: 0 0 200px 0;
	position: relative;
`;

const MathTitle = styled.h1`
	font-size: 30px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
`;

const MathContainer = styled.div`
	margin: 10px 20px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.primary};
	border: 4px solid ${(props) => props.theme.hover};
	padding: 20px;
	position: relative;
	@media (min-width: 768px) {
		max-width: 85%;
		padding: 30px;
		margin-top: 30px;
	}
	@media (min-width: 1400px) {
		max-width: 70%;
	}
	${(props) => (props.blurred ? `filter: blur(4px);` : `filter: none;`)}
`;

const TimerContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`;

const MathProblem = styled.h2`
	color: ${(props) => props.theme.textColor};
	text-align: center;
	font-size: 32px;
	${(props) => (props.wrongAnswer ? `color: red; transform: scale(1.2)` : ``)}
`;

const StatusText = styled.p`
	color: ${(props) => props.theme.textColor};
	text-align: center;
	font-size: 14px;
`;
