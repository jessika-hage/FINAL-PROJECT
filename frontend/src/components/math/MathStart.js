import React from 'react';
import styled from 'styled-components';

export const MathStart = ({ easy, medium, hard }) => {
  return (
    <Container>
      <Text>Choose difficulty level: </Text>
      <ButtonContainer>
        <Button onClick={easy}>Easy</Button>
        <Button onClick={medium}>Medium</Button>
        <Button onClick={hard}>Hard</Button>
      </ButtonContainer>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.primary};
`;

const Text = styled.h2`
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px;
  font-family: 'Trispace';
  text-transform: uppercase;
  margin: 5px;
`;