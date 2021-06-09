import React from 'react'
import { FaCoins } from 'react-icons/fa';

import { MainContainer, BadgeContainer, BadgeText, BadgeIcon } from './Styling';



export const BadgesAnimation = ({ text }) => {

    return (

        <BadgeContainer>
            <BadgeText>+{text}</BadgeText>
            <BadgeIcon><FaCoins /></BadgeIcon>
        </BadgeContainer>   

    )
}