import React from 'react';

import { 
  ImageNameContainer, 
  ProfileAvatar, 
  StatusContainer, 
  Username, 
  PointsText, 
  IconImage } from './Styling';

export const ProfileStats = ({ username, badges, ranking, coins }) => {
  return (
    <ImageNameContainer>
    <ProfileAvatar src={require(`../../assets/hacker.png`)} />
    <StatusContainer>
      <Username>{username}</Username>
      <PointsText>
        <IconImage src={require(`../../assets/badge.png`)} /> 
        {badges}
      </PointsText>
      <PointsText>{ranking}/100 Ranking</PointsText>
      <PointsText>
        <IconImage src={require(`../../assets/money2.png`)} /> 
        {coins}
      </PointsText>
    </StatusContainer>
  </ImageNameContainer>
  )
};