import React from 'react';
import styled from 'styled-components';

import { ThemeButtons } from '../../components/theme/ThemeButtons';
import { UpdatePassword } from './UpdatePassword';

export const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeButtons text='Change your spaceship color:' />
      <UpdatePassword />
    </SettingsContainer>
  )
};

const SettingsContainer = styled.div`
  background-color: ${props => props.theme.primary};
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