import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

import { MemoryCard } from "./MemoryCard";
import { GameService } from "./GameService";
import { CARD_STATUS, GAME_STATUS, DECK_SIZE } from "./constants";

export const MemoryBoard = ({ gameStatus, onGameUpdate }) => {
  const [deck, setDeck] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [openCardCounter, setOpenCardCounter] = useState(0);

  const flipCounter = useRef(0);
  const isMounted = useRef(false);

 // Check if the flipped cards match
  const checkPair = useCallback(() => {
    if (firstCard && secondCard) {
      const first = { ...deck[firstCard.index] };
      const second = { ...deck[secondCard.index] };

      if (firstCard.id === secondCard.id) {
        first.status = CARD_STATUS.MATCHED;
        second.status = CARD_STATUS.MATCHED;
      } else {
        first.status = CARD_STATUS.HIDDEN;
        second.status = CARD_STATUS.HIDDEN;
      }

      const newDeck = {
        ...deck,
        [firstCard.index]: first,
        [secondCard.index]: second,
      };

      setTimeout(() => {
        setDeck(newDeck);
      }, 800);

      setTimeout(resetCards, 800);
    }
  }, [deck, firstCard, secondCard]);

  // Reset all cards
  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
  };

  const toggleCard = (index, status) => {
    const newDeck = { ...deck };
    const newCard = { ...newDeck[index] };
    newCard.status = status;
    newDeck[index] = newCard;
    setDeck(newDeck);
  };

  const handleClick = (index, id) => {
    if (isChecking) return;

    flipCounter.current++;
    
    if (openCardCounter < 2) {
      const newCount = openCardCounter + 1;
      const newCard = { index, id };
      setOpenCardCounter(newCount);

      if (newCount === 1) {
        setFirstCard(newCard);
      } else {
        setSecondCard(newCard);
        setIsChecking(true);
      }

      toggleCard(index, CARD_STATUS.SELECTED);
    }
  };

  // Check if the all cards are matched and game is finished
  const checkGameFinished = useCallback(() => {
    if (openCardCounter === 0) {
      const matches = Object.keys(deck).filter(
        (key) => deck[key].status === CARD_STATUS.MATCHED
      );

      // Game is finished
      if (matches.length === DECK_SIZE) {
        onGameUpdate(GAME_STATUS.FINISHED, {
          flips: flipCounter.current,
        });
      }
    } else if (openCardCounter === 2) {
      setOpenCardCounter(0);
      checkPair();
    }
  }, [checkPair, deck, openCardCounter, onGameUpdate]);

  const startGame = useCallback(async () => {
    try {
      const newDeck = await GameService();
      setDeck(newDeck);
      flipCounter.current = 0;
      onGameUpdate(GAME_STATUS.IN_PROGRESS);
    } catch (error) {
      console.error(error);
    }
  }, [onGameUpdate]);


  // Initial render
  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current && gameStatus === GAME_STATUS.CREATING) {
      startGame();
    }
    return () => {
      isMounted.current = false;
    };
  }, [gameStatus, startGame]);

  useEffect(() => {
    if (isMounted.current) {
      switch (gameStatus) {
        case GAME_STATUS.CREATING:
          break;
        case GAME_STATUS.IN_PROGRESS:
          checkGameFinished();
          break;
        case GAME_STATUS.FINISHED:
          break;
        default:
          break;
      }
    }
  }, [deck, checkGameFinished, gameStatus, onGameUpdate]);


  return (
    <MainContainer>
      <MemoryTitle>Memory Game</MemoryTitle>
      <GameContainer>
        <FlipText>Flips: {flipCounter.current}</FlipText>
      <GameGrid>
        {Object.entries(deck).map(([key, value]) => {
          return (
            <MemoryCard
              key={key}
              index={key}
              data={value}
              handleClick={handleClick}
            />
          );
        })}
      </GameGrid>
      </GameContainer>
    </MainContainer>
  );
};


const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const MemoryTitle = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.theme.primary};
  border: 4px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  padding: 20px 10px;
  @media (min-width: 1024px) {
    max-width: 85%;
    padding: 30px;
  }
  @media (min-width: 1400px) {
    max-width: 70%;
  }
`; 

const FlipText = styled.p`
  font-size: 16px;
  position: absolute;
  left: 20px;
  top: 0;
  // @media (min-width: 768px) {
  //   margin: 0 0 15px 35px;
  // }
`;

const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;