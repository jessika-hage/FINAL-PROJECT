import React from 'react'

import { 
    BadgeContainer, 
    BadgeText, 
    BadgeIcon } from './Styling';

export const RankingAnimation = ({ text }) => {
  return (
    <BadgeContainer>
      <BadgeText>+{text}</BadgeText>
      <BadgeIcon src={require(`../../assets/badge.png`)} /> 
    </BadgeContainer>   
  )
};    
