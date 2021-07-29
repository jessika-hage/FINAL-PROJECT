import React from 'react';

import { 
  InfoPage,
  PageTitle,
  TextInfo,
BottomText,
EndText,
EndTextName,
Email } from './Styling';

  export const FirstInfo = () => {
    return (
      <InfoPage>
      <PageTitle>Dear Citizen,</PageTitle>
        <TextInfo>Now that you are onboard our ship, there are things you need to know. There are
          many days left to our destination so it's important that you know how life
          on the ship works. The most important part of being a citizen is the ranking, you're status. 
          You can increase your ranking e.g. when you purchase items in the shop, 
          make a successful investment, sleep or workout. But these things do not come by themself,
          you need badges and coins to be able to do the things that can increase your ranking.
        </TextInfo>
        <TextInfo>
          You can access your profile on your avatar in the corner. There you can
          keep track on your ranking, badges, coins, energy, items you own and your 
          investments. There is also a settings page where you can change your avatar,
          color on your spaceship and your avatar.
        </TextInfo>
        <BottomText>
          <EndText>Your commanders,</EndText>
          <EndTextName>Ylva Landoff Lindberg & Jessika Hage</EndTextName>
          <Email 
            href='mailto:commander@citizenship.se' 
            target="_blank" 
            rel="noopener noreferrer">commander@citizenship.se
          </Email>
        </BottomText>
    </InfoPage>
    )
  };