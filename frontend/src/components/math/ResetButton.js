import React from "react";

import { Button } from './Styling';

export const ResetButton = ({ resetButton, onClick, buttonText }) => {
  return (
    <Button
      ref={resetButton}
      onClick={onClick}>
      {buttonText}
    </Button>
  )
};