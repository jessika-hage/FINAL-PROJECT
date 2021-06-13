import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { Dialog } from '@material-ui/core';

import { updateBadges } from '../../reducers/profile';
import { 
  MainContainer, 
  GameTitle, 
  ScoreText, 
  CounterText, 
  ButtonOne, 
  ButtonTwo, 
  ButtonThree, 
  DialogContainer, 
  DialogText, 
  StartButton } from './Styling';

export const GameBall = () => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [openFinishedDialog, setOpenFinishedDialog] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const onCollectBadges = () => {
    dispatch(updateBadges(score));
    setTimeout(() => {
      history.push('/')
    }, 1000)
  };

  useEffect(() => {
    if (counter === 0) {
      setOpenFinishedDialog(true);
    }
  }, [counter])
  
  const onClickEasy = () => {
    setScore(score +1);
  };

  const onClickMedium = () => {
    setScore(score + 2);
  };

  const onClickHard = () => {
    setScore(score + 3);
  };

  return (
    <MainContainer>
      <GameTitle>Space Ball</GameTitle>
      <ScoreText>Score: {score}</ScoreText>
      <CounterText>00:{counter}</CounterText>
      <ButtonOne onClick={onClickHard}></ButtonOne>
      <ButtonTwo onClick={onClickMedium}></ButtonTwo>
      <ButtonThree onClick={onClickEasy}></ButtonThree>
      <Dialog open={openFinishedDialog}>
        <DialogContainer>
          <DialogText>You managed to get {score} badges!</DialogText>
          <StartButton onClick={onCollectBadges}>Collect badges</StartButton>
        </DialogContainer>
      </Dialog>
    </MainContainer>
  )
};