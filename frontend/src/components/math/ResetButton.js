import React from "react";
import styled from "styled-components";

export const ResetButton = ({ resetButton, onClick }) => {
  return (
    <Button
      ref={resetButton}
      onClick={onClick}>
      Start Over
    </Button>
  )
};

const Button = styled.button`
  padding: 12px 20px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  outline: none;
  border: 1px solid ${props => props.theme.primary};
  font-size: 16px;
  cursor: pointer; 
  font-family: "Trispace";
  :hover {
    opacity: 0.7;
 }
  `