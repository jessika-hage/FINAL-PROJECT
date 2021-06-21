import React from 'react';

import { ThemeButtons } from '../../theme/ThemeButtons';
import { UpdatePassword } from './UpdatePassword';
import { SettingsAvatars } from './SettingsAvatars';
import { 
  SettingsContainer, 
  SettingsTitle, 
  ChangeTitle, 
  CloseIcon } from './Styling';

export const Settings = ({ onClose }) => {

  return (
    <SettingsContainer>
      <SettingsTitle>
        Settings
        <CloseIcon onClick={onClose} />
      </SettingsTitle>
      <SettingsAvatars />
      <ChangeTitle>Change your spaceship color:</ChangeTitle>
      <ThemeButtons />
      <UpdatePassword />
    </SettingsContainer>
  )
};