import React from 'react';
import { useSelector } from 'react-redux';

import { 
  ProgressContainer, 
  ProgressText, 
  ProgressBar, 
  ProgressFiller } from './Styling';

export const RankingProgress = () => {
  const ranking = useSelector((store) => store.profile.ranking);
  return (
    <ProgressContainer>
      <ProgressText>{ranking}/100</ProgressText>
      <ProgressBar>
        <ProgressFiller style={{ width: `${ranking}%` }}></ProgressFiller>
      </ProgressBar>
    </ProgressContainer>
  )
};