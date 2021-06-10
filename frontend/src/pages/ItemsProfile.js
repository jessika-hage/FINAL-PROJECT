import React from 'react';
import styled from 'styled-components';

export const ItemsProfile = ({ item }) => {
  return (
    <ItemsContainer>
      <ItemsText>{item.title}: </ItemsText>
      <ItemsText>{item.quantity}</ItemsText>
    </ItemsContainer>
  )
};

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin: 0;
  width: fit-content;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

const ItemsText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 0;
  padding: 0;
`;