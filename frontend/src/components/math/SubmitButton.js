import React from "react";
import styled from "styled-components";

export const SubmitButton = () => {
    return (
        <Button type="submit">submit</Button>
    )
};

const Button = styled.button`
  padding: 10px 10px;
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
  `;