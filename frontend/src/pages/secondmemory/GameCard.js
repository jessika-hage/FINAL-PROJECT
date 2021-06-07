import React, { useState } from "react";
import styled from "styled-components"
import ReactCardFlip from 'react-card-flip';

import { CARD_STATUS } from "./constants";


export const GameCard = ({ data, handleClick, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { id, url, status } = data;
  const isSelected = status === CARD_STATUS.SELECTED;
  const isMatched = status === CARD_STATUS.MATCHED;

  const onCardClick = () => {
    if (status === CARD_STATUS.HIDDEN) {
      handleClick(index, id);
      setFlipped(true)
    }
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  let isFlipped = false;
  if (isSelected) isFlipped = true;
  if (isMatched) isFlipped = true;

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <MemoryCard flipped={isFlipped} onClick={onCardClick}>
      </MemoryCard>
      <ImageCard src={url} alt="card" onLoad={handleImageLoad} />
    </ReactCardFlip>
  );
};


const MemoryCard = styled.div`
	height: 120px;
	width: 90px;
	background-color: ${(props) => props.theme.secondary};
  margin: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

const ImageCard = styled.img`
  margin: 5px;
  height: 120px;
	width: 90px;
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

