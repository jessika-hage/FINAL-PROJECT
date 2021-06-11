import React from 'react';

import { ButtonContainer, Avatar } from './Styling';

export const Avatars = () => {
  return (
    <ButtonContainer>
      <Avatar src={require(`../../assets/woman.png`)} />
      <Avatar src={require(`../../assets/man2.png`)} />
      <Avatar src={require(`../../assets/hacker.png`)} />
      <Avatar src={require(`../../assets/woman3.png`)} />
      <Avatar src={require(`../../assets/woman2.png`)} />
      <Avatar src={require(`../../assets/business-man.png`)} />
    </ButtonContainer>
  )
};