import React from 'react';
import { Tooltip } from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';

import { RoomFarm, Icons } from './Styling';

export const Farm = () => {
  return (
    <Tooltip title='FARM'>
      <RoomFarm to='/memorygame'>
        <Icons>
          <BugReportIcon fontSize='large' />
        </Icons>
      </RoomFarm>
    </Tooltip>
  )
};
