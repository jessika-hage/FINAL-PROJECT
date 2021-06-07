import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent, DialogActions, DialogTitle } from "@material-ui/core";

import { GAME_STATUS } from "./constants";

export const GameFinished = ({ open, onReset, results }) => {

  const handleReset = () => {
    onReset(GAME_STATUS.CREATING);
  };

  return (
    <Dialog open={open}>
      <DialogContainer>
        <DialogTitle>You solved the memory game!</DialogTitle>
        <DialogContent>Cards flipped: {results.flips}</DialogContent>
        <DialogContent>Time taken: {results.time}</DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Collect points</Button>
        </DialogActions>
      </DialogContainer>
    </Dialog>
  );
};


const DialogContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-directioN: column;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: "Trispace";
  border: 4px solid ${props => props.theme.hover};
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Trispace";
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.hover};
  }
`;