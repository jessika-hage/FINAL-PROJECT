import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateBadges } from '../../reducers/profile';
import { Header } from '../header/Header';
import { Camera } from '../header/Camera';
import { FinishDialog } from './FinishDialog';
import { BadgesAnimation } from '../../components/animations/BadgesAnimation';
import { 
  MainContainer, 
  GameTitle, 
  ScoreText, 
  CounterText, 
  TriviaContainer, 
  Question, 
  ButtonContainer, 
  AnswerButton } from './Styling';


export const Trivia = () => {
  const [questions, setQuestions] = useState([])
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(30);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [openFinish, setOpenFinish] = useState(false);
  const [animation, setAnimation] = useState(false);
  const API = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';

  const dispatch = useDispatch();
  const history = useHistory();

  // Fetch questions
	const fetchQuestion = useCallback(() => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
        randomizeAnswer(data.results[0].incorrect_answers, data.results[0].correct_answer)
				setQuestions(data.results);
        setLoaded(true);
        console.log(data)
			});
	}, []);

  useEffect(() => {
    fetchQuestion();
	}, [fetchQuestion]);

  useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const randomizeAnswer = (array, correctAnswer) => {
    const randomIndex = Math.floor(Math.random() * 2)
    array.splice(randomIndex, 0, correctAnswer)
  };

  // Checking answer and moving on to next question
  // If questions run out, load new ones
  const handleAnswer = (e, answer) => {
    e.preventDefault();

    if(answer === questions[questionIndex].correct_answer) {
      setScore(score + 1)
    } 
    if(questionIndex + 1 < questions.length) {
       randomizeAnswer(questions[questionIndex + 1].incorrect_answers, questions[questionIndex + 1].correct_answer)
       setQuestionIndex(questionIndex + 1)
     } else {
       fetchQuestion()
       setQuestionIndex(0)
     }
 };

 useEffect(() => {
  if (counter === 0) {
    setOpenFinish(true);
  }
}, [counter]);

 const onCollectBadges = () => {
  dispatch(updateBadges(score));
  setAnimation(true);
  setTimeout(() => {
    history.push('/')
  }, 1000)
};

  return (
    <>
    <Header />
    <Camera />
    <MainContainer>
      <GameTitle>Trivia</GameTitle>
      <ScoreText>Score: {score}</ScoreText>
      <CounterText>00:{counter.toString().padStart(2, '0')}</CounterText>
      {loaded && <TriviaContainer>
      <Question>{questions[questionIndex].question}</Question> 
      <ButtonContainer>
        {questions[questionIndex].incorrect_answers.map((option) => {
          return (
            <AnswerButton key={option} onClick={(e) => handleAnswer(e, option)}>{option}</AnswerButton>
          )
        })}
      </ButtonContainer>
      </TriviaContainer>
      }
      <FinishDialog 							
        open={openFinish}
        endText={score}
        onClick={onCollectBadges}
        buttonText={score > 0 ? 'Collect badges' : 'Try again later'} />
      </MainContainer>
      {animation && <BadgesAnimation text={score} /> }
    </>
  )
};