import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';

import { 
  RoomInfo, 
  Icons, 
  DialogContainer, 
  InfoTitle } from './Styling';

export const Info = () => {
  const [openInfo, setOpenInfo] = useState(false);

	const onToggleInfoDialog = () => {
		setOpenInfo(!openInfo);
	};
  return (
    <Tooltip title='INFO!'>
      <RoomInfo onClick={onToggleInfoDialog}>
        <Icons>
          <InfoIcon fontSize='large' />
        </Icons>
        <Dialog open={openInfo} onClick={onToggleInfoDialog}>
          <DialogContainer>
            <InfoTitle>ship info & rules</InfoTitle>
          </DialogContainer>
        </Dialog>
      </RoomInfo>
  </Tooltip>
  )
};