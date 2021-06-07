import React from "react";
import styled from "styled-components";

export const SubmitButton = () => {
    return (
        <Button type="submit">submit</Button>
    )
};

const Button = styled.button`
  padding: 10px 10px;
  background-color: ${props => props.theme.hover};
  color: ${props => props.theme.textColor};
  outline: none;
  border: 2px solid ${props => props.theme.hover};
  font-size: 14px;
  cursor: pointer; 
  font-family: "Trispace";
  text-transform: uppercase;
  :hover {
    background-color: ${props => props.theme.primary};
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  `;
