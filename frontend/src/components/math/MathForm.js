import React from "react";
import styled from "styled-components";

import { SubmitButton } from "./SubmitButton";

export const MathForm = ({ handleSubmit, answerField, value, onChange }) => {
    return (
        <Form onSubmit={handleSubmit} action="">
        <NumberInput
          ref={answerField}
          value={value}
          onChange={onChange}
          type="text"
          autoComplete="off"
          placeholder="Type answer"
        />
        <SubmitButton />
      </Form>
    )
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const NumberInput = styled.input`
  padding: 7px;
  background-color: ${props => props.theme.primary};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  outline: none;
  font-size: 14px;
  font-family: "Trispace";
  :focus {
    background-color: ${props => props.theme.secondary};
  }
  `;