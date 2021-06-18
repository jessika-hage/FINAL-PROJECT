import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import { 
  RoomSpace, 
  Icons, 
  DialogContainer, 
  InfoTitle, 
  InfoText, 
  StartGameButton,
  CirclePoint,
  Circle,
  Orange,
  Blue,
  Purple,
  Pink,
  Green } from './Styling';


export const SpaceBall = () => {
  const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

  return (
    <RoomSpace onClick={onToggleGameDialog}>
      <Icons>
        <BubbleChartIcon fontSize='large' />
      </Icons>
      <Dialog open={openGame} onClick={onToggleGameDialog}>
        <DialogContainer>
          <InfoTitle>Space Ball</InfoTitle>
          <InfoText>This game is to train your reflexes and see how fast you are, also an important part of being a citizen! 
            You have 30 seconds to collect as many points as possible.</InfoText>
          <CirclePoint><Purple></Purple> - 1 point</CirclePoint>
          <CirclePoint><Green></Green> - 1 points</CirclePoint>
          <CirclePoint><Pink></Pink> - 2 points</CirclePoint>
          <CirclePoint><Blue></Blue> - 3 points</CirclePoint>
          <CirclePoint><Orange></Orange> - 4 points</CirclePoint>
          <StartGameButton to='/spaceball'>Lets start</StartGameButton>
        </DialogContainer>
      </Dialog>
  </RoomSpace>
  )
};