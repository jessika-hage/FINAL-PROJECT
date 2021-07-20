import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomInfo, 
  DialogContainer, 
  InfoTitle,
  TextInfo,
  InfoIcon,
  InfoItem,
  CloseIcon,
  BottomText,
  EndText,
  EndTextName,
  Email } from './Styling';

export const Info = () => {
  const [open, setOpen] = useState(false);

	const onToggleDialog = () => {
		setOpen(!open);
	};

  return (
    <>
      <RoomInfo 
        tabIndex='0' 
        aria-label='Ship Info' 
        onClick={onToggleDialog}>
        <InfoIcon />
      </RoomInfo>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <InfoTitle>
            Ship info
            <CloseIcon tabIndex='0' onClick={onToggleDialog} />
          </InfoTitle>
          <TextInfo>There are a number of things to think about as a citizen. The most important one 
            is the ranking. To get higher ranking you need to collect badges and coins. Things that effect your ranking
            is for example how many things you own, if you sleep, work out and have a good energy intake. 
            We don't want any week citizens.
          </TextInfo>
          <InfoItem>
            BADGES
            - You can win badges in the different games. And then you can exchange them for coins.
          </InfoItem>
          <InfoItem>
            COINS
            - You can use the coins to invest in Space$, buy food and other things in the store.
          </InfoItem>
          <BottomText>
            <EndText>Your commanders,</EndText>
            <EndTextName>Ylva Landoff Lindberg & Jessika Hage</EndTextName>
            <Email 
              href='mailto:commander@citizenship.se' 
              target="_blank" 
              rel="noopener noreferrer">commander@citizenship.se
            </Email>
          </BottomText>
        </DialogContainer>
      </Dialog>
    </>
  )
};