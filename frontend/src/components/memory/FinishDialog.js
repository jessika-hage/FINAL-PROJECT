import React from "react";
import styled from "styled-components";
import { 
  Dialog, 
  DialogContent, 
  DialogActions, 
  DialogTitle } from "@material-ui/core";


export const FinishDialog = ({ 
  handleCollect, 
  openWin, 
  status, 
  results }) => {

  return (
    <Dialog open={openWin}>
      <DialogContainer>
        <DialogTitle>{status}</DialogTitle>
        <DialogContent>You made it with {results.flips} flips</DialogContent>
        <DialogActions>
          <Button onClick={handleCollect}>Collect badges</Button>
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