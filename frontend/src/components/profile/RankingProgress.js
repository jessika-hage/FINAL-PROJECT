import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 0 0 10px 0;
`; 

const ProgressBar = styled.div`
  height: 8px;
  width: 100%;
  border: 1px solid ${props => props.theme.secondary};
`;

const ProgressFiller = styled.div`
  background: ${props => props.theme.hover};
  width: 100%;
  height: 100%;
  transition: width 0.5s linear;
`;

const ProgressText = styled.p`
  font-size: 10px;
  margin: 0 2px 4px 0;
  color: ${props => props.theme.textColor};
`;