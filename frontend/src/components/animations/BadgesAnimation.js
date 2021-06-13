import React from 'react'

import { 
    BadgeContainer, 
    BadgeText, 
    BadgeIcon } from './Styling';


export const BadgesAnimation = ({ text }) => {
  return (
    <BadgeContainer>
      <BadgeText>+{text}</BadgeText>
      <BadgeIcon src={require(`../../assets/money2.png`)} /> 
    </BadgeContainer>   
  )
};    
