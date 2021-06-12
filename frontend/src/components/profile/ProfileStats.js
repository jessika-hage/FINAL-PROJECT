import React from 'react';

import { 
  ImageNameContainer, 
  ProfileAvatar, 
  StatusContainer, 
  Username, 
  BadgesText,
  CoinsText,
  IconImage } from './Styling';

export const ProfileStats = ({ avatar, username, badges, ranking, coins }) => {
  return (
    <ImageNameContainer>
    <ProfileAvatar src={avatar} />
    <Username>{username}</Username>
    <CoinsText>{ranking}/100 Ranking</CoinsText>
    <StatusContainer>
      <BadgesText>
        <IconImage src={require(`../../assets/badge.png`)} /> 
        {badges}
      </BadgesText>
      <CoinsText>
        <IconImage src={require(`../../assets/money2.png`)} /> 
        {coins}
      </CoinsText>
    </StatusContainer>
  </ImageNameContainer>
  )
};