import React from "react";
import styled from "styled-components";

export const ResetButton = ({ resetButton, onClick, buttonText }) => {
  return (
    <Button
      ref={resetButton}
      onClick={onClick}>
      {buttonText}
    </Button>
  )
};

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