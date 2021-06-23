import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@material-ui/core';

import audio from '../../assets/ElectHitZap PE1030530.wav';
import { updateBadges, updateHighscoreSpaceball } from '../../reducers/profile';
import { Header } from '../header/Header';
import { Camera } from '../header/Camera';
import { BadgesAnimation } from '../../components/animations/BadgesAnimation';
import { 
  MainContainer, 
  GameTitle, 
  ScoreText, 
  CounterText, 
  ButtonOne, 
  ButtonTwo, 
  ButtonThree, 
  ButtonFour,
  ButtonFive,
  DialogContainer, 
  DialogText, 
  StartButton } from './Styling';

export const GameBall = () => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [openFinishedDialog, setOpenFinishedDialog] = useState(false);
  const [animation, setAnimation] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const highscore = useSelector((store) => store.profile.highscoreSpaceball);
  const numOfBadges = Math.round(score / 3);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
		if (!accessToken) {
			history.push('/signin');
		}
	}, [accessToken, history]);

  // Initializing timer
  useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Collect badges after game
  // Update highscore (if new highscore)
  // Update badges, set animation and push to main
  const onCollectBadges = () => {
    if (score > highscore) {
      dispatch(updateHighscoreSpaceball(score))
    }
    dispatch(updateBadges(numOfBadges));
    setAnimation(true);
    setTimeout(() => {
      history.push('/')
    }, 1000)
  };

  // Finish game when time is up
  useEffect(() => {
    if (counter === 0) {
      setOpenFinishedDialog(true);
    }
  }, [counter])
  
  const onClickScore = (number) => {
    new Audio(audio).play();
    setScore(score + number);
  };


  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle>Space Ball</GameTitle>
        <ScoreText>Score: {score}</ScoreText>
        <CounterText>00:{counter.toString().padStart(2, '0')}</CounterText>
        <ButtonOne onClick={() => onClickScore(4)}></ButtonOne>
        <ButtonTwo onClick={() => onClickScore(3)}></ButtonTwo>
        <ButtonThree onClick={() => onClickScore(1)}></ButtonThree>
        <ButtonFour onClick={() => onClickScore(2)}></ButtonFour>
        <ButtonFive onClick={() => onClickScore(5)}></ButtonFive>
        <Dialog open={openFinishedDialog}>
          <DialogContainer>
            <DialogText>You managed to get {score} points which is {numOfBadges} badges!</DialogText>
            <StartButton onClick={onCollectBadges}>{score > 0 ? 'Collect badges' : 'Sorry, no badges this time'}</StartButton>
          </DialogContainer>
        </Dialog>
      </MainContainer>
     { animation && <BadgesAnimation text={numOfBadges} /> }
    </>
  )
};