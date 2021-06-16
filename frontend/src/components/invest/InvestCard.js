import React from 'react';
import styled from 'styled-components';

export const InvestCard = () => {
  return (
    <Container>
      <ThumbnailTwo src={require('./growth.png')} />
      <TextContainer>
      <Title>Space Invest</Title>
      </TextContainer>
      <Button>Invest</Button>
    </Container>
  )
};

const Container = styled.div`
  padding: 20px;
  background: ${props => props.theme.backgroundColor};
  position: relative;
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0 0 5px 0;
  font-size: 15px;
  text-transform: uppercase;
  color: ${props => props.theme.textColor};	
  @media (min-width: 768px) {
		font-size: 18px;
	}
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColor};
  padding: 10px;
  border: ${props => props.theme.secondary};
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Trispace", serif;
  :hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const ThumbnailTwo = styled.img`
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
      width: 105px;
  }
`;