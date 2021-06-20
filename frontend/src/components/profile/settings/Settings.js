import React from 'react';
import styled from 'styled-components';

import { ThemeButtons } from '../../theme/ThemeButtons';
import { UpdatePassword } from './UpdatePassword';
import { SettingsAvatars } from './SettingsAvatars';
import { ChangeTitle } from './Styling';

export const Settings = () => {

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
        <SettingsAvatars />
        <ChangeTitle>Change your spaceship color:</ChangeTitle>
      <ThemeButtons />
      <UpdatePassword />
    </SettingsContainer>
  )
};

const SettingsContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SettingsTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
`;
