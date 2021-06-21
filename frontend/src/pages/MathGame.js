import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateBadges, updateHighscoreMath } from '../reducers/profile';
import { MathForm } from '../components/math/MathForm';
import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';
import { FinishGame } from '../components/math/FinishGame';
import { BadgesAnimation } from '../components/animations/BadgesAnimation';
import { generateProblem } from '../components/math/MathHelpers';
import { MathStart } from '../components/math/MathStart';

import { 
	MainContainer, 
	MathTitle, 
	MathContainer, 
	TimerContainer, 
	MathProblem, 
	StatusText } from '../components/math/Styling';

export const MathGame = () => {
	const [openFinish, setOpenFinish] = useState(false);
	const [start, setStart] = useState(false);
	const [score, setScore] = useState(0);
	const [mistakes, setMistakes] = useState(0);
	const [counter, setCounter] = useState(null);
	const [easy, setEasy] = useState(false);
	const [medium, setMedium] = useState(false);
	const [hard, setHard] = useState(false);
	const [currentProblem, setCurrentProblem] = useState(generateProblem());
	const [userAnswer, setUserAnswer] = useState('');
	const [showError, setShowError] = useState(false);
	const [animation, setAnimation] = useState(false);
	const answerField = useRef(null);
	const resetButton = useRef(null);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const highscore = useSelector((store) => store.profile.highscoreMath);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

	//Initializing the timer
	useEffect(() => {
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
			return () => clearInterval(timer);
	}, [counter]);

	// Opens dialog when game is finished
	useEffect(() => {
		if (mistakes === 3 || counter === 0) {
			setOpenFinish(true);
		}
	}, [mistakes, counter]);

	// Functions for difficulty level
	const onClickEasy = () => {
		setCurrentProblem(generateProblem(10))
		setEasy(true);
		setStart(true);
		setCounter(40);
	};

	const onClickMedium = () => {
		setCurrentProblem(generateProblem(20))
		setMedium(true);
		setStart(true);
		setCounter(30);
	};

	const onClickHard = () => {
		setCurrentProblem(generateProblem(30))
		setHard(true);
		setStart(true);
		setCounter(25);
	};

	// Submitting answer
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
			setUserAnswer('');
			if (easy) setCurrentProblem(generateProblem(10))
			if (medium) setCurrentProblem(generateProblem(20))
			if (hard) setCurrentProblem(generateProblem(30))
		} else {
			setMistakes((prev) => prev + 1);
			setShowError(true);
			setTimeout(() => setShowError(false), 400);
		}
	};

	// Collecting badges
	// Returning to main
	const resetGame = () => {
		if (score > 0) {
			if (score > highscore) {
				dispatch(updateHighscoreMath(score));
			}
			if(hard === true) {
				dispatch(updateBadges(score * 2));
			} else  {
				dispatch(updateBadges(score));
			}
			setAnimation(true)
			setOpenFinish(false);
			setTimeout(() => {
				history.push('/')
			}, 2000)
		} else {
			history.push('/');
		}	
	};

	return (
		<MainContainer>
			<Header />
			<Camera />
			<MathTitle>Classroom</MathTitle>
			<MathContainer>
				{!start ?
					<MathStart 
						easy={onClickEasy} 
						medium={onClickMedium} 
						hard={onClickHard} />
					:
					<>
						<TimerContainer>00:{counter.toString().padStart(2, '0')}</TimerContainer>
						<MathProblem wrongAnswer={showError}>
							{currentProblem.numberOne} {currentProblem.operator}{' '}
							{currentProblem.numberTwo}
						</MathProblem>
						<MathForm
							handleSubmit={handleSubmit}
							answerField={answerField}
							value={userAnswer}
							onChange={(e) => setUserAnswer(e.target.value)} />
						<StatusText>
							You have {score} points, and can make {3 - mistakes}{' '}
							more mistakes.
						</StatusText>
						<FinishGame
							open={openFinish}
							endText={!hard ? score : score * 2}
							resetButton={resetButton}
							onClick={resetGame}
							buttonText={score > 0 ? 'Collect badges' : 'Try again later'}	/> 
					</>
				}
			</MathContainer>
			{ animation && <BadgesAnimation text={!hard ? score : score * 2} /> }
		</MainContainer>
	);
};
