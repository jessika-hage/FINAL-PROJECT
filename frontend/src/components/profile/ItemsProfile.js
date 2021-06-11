import React from 'react';

import { ItemsContainer, ItemsTitle, ItemsQuantity } from './Styling';

export const ItemsProfile = ({ item }) => {
  return (
    <ItemsContainer>
      <ItemsTitle>{item.title}: </ItemsTitle>
      <ItemsQuantity>{item.quantity}st</ItemsQuantity>
    </ItemsContainer>
  )
};
