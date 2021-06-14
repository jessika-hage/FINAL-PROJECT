import React from 'react';

import { 
  Container, 
  Text, 
  ButtonContainer, 
  Button } from './Styling';

export const MathStart = ({ easy, medium, hard }) => {
  return (
    <Container>
      <Text>Choose difficulty level: </Text>
      <ButtonContainer>
        <Button onClick={easy}>Beginner</Button>
        <Button onClick={medium}>Average</Button>
        <Button onClick={hard}>Expert</Button>
      </ButtonContainer>
    </Container>
  )
};