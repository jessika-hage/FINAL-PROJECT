import React from 'react';
import styled from 'styled-components';

import { ThemeButtons } from '../../theme/ThemeButtons';
import { UpdatePassword } from './UpdatePassword';
import { SettingsAvatars } from './SettingsAvatars';
import { ChangeTitle, CloseIcon } from './Styling';

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

const SettingsContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const SettingsTitle = styled.h2`
  font-size: 20px;
  padding: 0 3px 5px 3px;
  display: flex;
  margin: 0 0 5px 0;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid ${props => props.theme.secondary};
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
