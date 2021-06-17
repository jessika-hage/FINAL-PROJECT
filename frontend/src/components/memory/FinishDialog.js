import React from "react";
import styled from "styled-components";
import { 
  Dialog, 
  DialogContent, 
  DialogActions, 
  DialogTitle } from "@material-ui/core";

import { DialogContainer, Button } from './Styling';


export const FinishDialog = ({ 
  handleCollect, 
  openWin, 
  status, 
  results }) => {

  return (
    <Dialog open={openWin}>
      <DialogContainer>
        <DialogTitle>{status}</DialogTitle>
        <DialogContent>You made it with {results.flips} flips and it took you {results.time}</DialogContent>
        <DialogActions>
          <Button onClick={handleCollect}>Collect badges</Button>
        </DialogActions>
      </DialogContainer>
    </Dialog>
  );
};