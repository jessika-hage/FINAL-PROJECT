import React from 'react';

import { 
  TriviaContainer, 
  Text, 
  ButtonContainer, 
  Button } from './Styling';

export const TriviaStart = ({ easy, hard }) => {
  return (
    <TriviaContainer>
      <Text>Choose difficulty level: </Text>
      <ButtonContainer>
        <Button onClick={easy}>Easy</Button>
        <Button onClick={hard}>Hard</Button>
      </ButtonContainer>
    </TriviaContainer>
  )
};