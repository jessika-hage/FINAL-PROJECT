import React, { useState } from "react";
import styled from "styled-components";

import { GameBoard } from "./GameBoard";
import { GameFinished } from "./GameFinished";
import { Header } from "../../components/Header";
import { Camera } from "../../components/Camera";

import { GAME_STATUS } from "./constants";

export const MemoryGame = () => {
  const [open, setOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const [gameResults, setGameResults] = useState({});

  const handleStatusUpdate = (newStatus, results) => {
    setGameStatus(newStatus);
    if (newStatus === GAME_STATUS.FINISHED) {
      setGameResults(results);
      setOpen(true);
    }
  };

  return (
    <MainContainer>
      <Header />
      <Camera />
      <div>
        <GameBoard gameStatus={gameStatus} onGameUpdate={handleStatusUpdate} />
        {gameStatus === GAME_STATUS.FINISHED && (
          <GameFinished open={open} onReset={handleStatusUpdate} results={gameResults} />
        )}
      </div>
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
