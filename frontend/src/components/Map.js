import React from 'react';
import styled from 'styled-components';
import { FaUtensils, FaSeedling, FaShoppingCart, FaCalculator } from "react-icons/fa";
import { Tooltip } from "@material-ui/core";

export const Map = () => {
  return (
    <GridContainer>
      <Tooltip title="CLASSROM! Solve mathematical problems and earn points!">
        <RoomOne><Icon><FaCalculator /></Icon></RoomOne>
      </Tooltip>
      <RoomTwo></RoomTwo>
      <Tooltip title="RESTAURANT! see todays menu and upgrade meal!">
        <CircleRoom><Icon><FaUtensils /></Icon></CircleRoom>
      </Tooltip>
      <Tooltip title="GARDEN! grow flowers and earn points!">
        <RoomThree><Icon><FaSeedling /></Icon></RoomThree>
      </Tooltip>
      <Tooltip title="STORE!">
        <RoomFour><Icon><FaShoppingCart /></Icon></RoomFour>
      </Tooltip>
      <RoomFive></RoomFive>
      <RoomSix></RoomSix>
      <RoomSeven></RoomSeven>
    </GridContainer>
  )
}

const GridContainer = styled.section`
  display: grid;
  grid-template: repeat(7, 1fr) / repeat(7, 1fr);
  width: 100%;
`;

const RoomOne = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
  border: 2px solid white;
  border-top-left-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

const RoomTwo = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4 / span 3;
  border: 2px solid white;
  border-bottom-left-radius: 200px;
  background-color: ${props => props.theme.secondary};
`;

const RoomThree = styled.div`
  grid-column: 3 / span 2;
  grid-row: 1 / span 3;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

const RoomFour = styled.div`
  grid-column: 3 / span 2;
  grid-row: 4 / span 3;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

const RoomFive = styled.div`
  grid-column: 5 / span 2;
  grid-row: 1 / span 3;
  border: 2px solid white;
  background-color: ${props => props.theme.secondary};
`;

const RoomSix = styled.div`
  grid-column: 5 / span 2;
  grid-row: 3 / span 4;
  border: 2px solid white;
  background-color: ${props => props.theme.secondary};
`;

const CircleRoom = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3 / span 2;
  border: 2px solid white;
  border-radius: 50%;
  z-index: 1;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;

const RoomSeven = styled.div`
  grid-column: 7 / span 3;
  grid-row: 5 / span 1;
  
`;

const Icon = styled.button`
  color: ${props => props.theme.textColor};
  font-size: 44px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
      opacity: 0.7;
  }
`;
