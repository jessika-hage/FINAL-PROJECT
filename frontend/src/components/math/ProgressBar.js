import React from "react";

import { 
  ProgressContainer, 
  ProgressBox, 
  ProgressFiller } from "./Styling";

export const ProgressBar = ({ score }) => {
  return (
    <ProgressContainer>
      <ProgressBox>
        <ProgressFiller style={{ width: `${score}%` }}></ProgressFiller>
      </ProgressBox>
    </ProgressContainer>
  )
};