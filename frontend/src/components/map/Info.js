import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomInfo, 
  Icons, 
  DialogContainer, 
  InfoTitle,
  InfoIcon } from './Styling';

export const Info = () => {
  const [openInfo, setOpenInfo] = useState(false);

	const onToggleInfoDialog = () => {
		setOpenInfo(!openInfo);
	};
  return (
    <Tooltip title='INFO!'>
      <RoomInfo onClick={onToggleInfoDialog}>
        <InfoIcon />
        <Dialog open={openInfo} onClick={onToggleInfoDialog}>
          <DialogContainer>
            <InfoTitle>ship info & rules</InfoTitle>
          </DialogContainer>
        </Dialog>
      </RoomInfo>
  </Tooltip>
  )
};