import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ThemeButtons } from '../components/ThemeButtons';

export const SignUp = () => {
  return (
    <MainContainer>
        <Title>Citizen Ship</Title>
        <NameInput type="text" placeholder="username"></NameInput>
        <NameInput type="text" placeholder="password"></NameInput>
        <ChooseText>Choose your avatar:</ChooseText>
        <ThemeButtons />
        <ChooseText>Color your spaceship:</ChooseText>
        <ThemeButtons />
        <Button>become a citizen</Button>
        <SignIn>Already a citizen? Board ship here!</SignIn>
    </MainContainer>
  )
};

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.primary};
`;

const Title = styled.h1`
  font-family: "Trispace";
  text-transform: uppercase;
  color: ${props => props.theme.textColor};
  font-size: 40px;
  display: flex;
  margin-bottom: 40px;
`;

const NameInput = styled.input`
  padding: 10px;
  outline: none;
  border-bottom: 3px solid ${props => props.theme.secondary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 20px;
  width: 300px;
  font-family: "Trispace";
`;

const ChooseText = styled.p`
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: "Trispace";
  font-size: 14px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 15px 25px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: "Trispace";
  margin-top: 35px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const SignIn = styled.p`
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-family: "Trispace";
  font-size: 14px;
`;