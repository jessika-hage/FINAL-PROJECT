import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomInfo, 
  DialogContainer, 
  InfoTitle,
  InfoIcon,
  CloseIcon } from './Styling';

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
            <InfoTitle>
              Ship info & rules
              <CloseIcon onClick={onToggleInfoDialog} />
            </InfoTitle>
          </DialogContainer>
        </Dialog>
      </RoomInfo>
  </Tooltip>
  )
};