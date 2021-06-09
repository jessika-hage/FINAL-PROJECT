import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { updateBadges } from '../reducers/profile';
import { GameBoard } from "../components/memory/GameBoard";
import { GameFinished } from "../components/memory/GameFinished";
import { Header } from "../components/Header";
import { Camera } from "../components/Camera";
import { BadgesAnimation } from '../components/animations/BadgesAnimation';

import { GAME_STATUS } from "../components/memory/constants";

export const MemoryGame = () => {
  const [open, setOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const [gameResults, setGameResults] = useState({});
  const [animation, setAnimation] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const countPoints = gameResults.flips;

  const dispatch = useDispatch();
  const history = useHistory();

useEffect(() => {
  if (!accessToken) {
    history.push('/signin');
  }
}, [accessToken, history]);
  

  const handleStatusUpdate = (newStatus, results) => {
    setGameStatus(newStatus);
    if (newStatus === GAME_STATUS.FINISHED) {
      setGameResults(results);
      setOpen(true);
    }
  };

  const handleReset = () => {
    setOpen(false);
    setAnimation(true);
    // onReset(GAME_STATUS.CREATING);
    dispatch(updateBadges(countPoints));
    setTimeout(() => {
      history.push('/');
    }, 2000)
  };

  return (
    <MainContainer>
      <Header />
      <Camera />
      <div>
        <GameBoard gameStatus={gameStatus} onGameUpdate={handleStatusUpdate} onReset={handleStatusUpdate} />
        {gameStatus === GAME_STATUS.FINISHED && (
          <GameFinished 
            open={open} 
            // onChange={handleStatusUpdate} 
            results={gameResults}
            handleReset={handleReset} />
        )}
      </div>
      {animation && <BadgesAnimation text={countPoints} />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: auto;
  margin: 0;  
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;