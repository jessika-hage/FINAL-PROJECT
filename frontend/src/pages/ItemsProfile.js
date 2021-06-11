import React from 'react';
import styled from 'styled-components';

export const ItemsProfile = ({ item }) => {
  return (
    <ItemsContainer>
      <ItemsTitle>{item.title}: </ItemsTitle>
      <ItemsQuantity>{item.quantity}st</ItemsQuantity>
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

const ItemsTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  margin: 0 0 0 3px;
  padding: 0;
`;

const ItemsQuantity = styled(ItemsTitle)`
  margin: 0 0 0 5px;
`;