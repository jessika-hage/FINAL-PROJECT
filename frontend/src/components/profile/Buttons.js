import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { ThemeButtons } from '../theme/ThemeButtons';
import { ButtonContainer, ButtonSignOut } from './Styling';

export const Buttons = ({ onClick }) => {
  return (
    <ButtonContainer>
      <ThemeButtons text='Change your spaceship color:' />
      <ButtonSignOut onClick={onClick}>
      <FaSignOutAlt />
    </ButtonSignOut>
  </ButtonContainer>
  )
};