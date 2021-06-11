import React from 'react';
import { Tooltip } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

import { RoomMemory, Icons } from './Styling';

export const Memory = () => {
  return (
    <Tooltip title='MEMORY'>
      <RoomMemory to='/memorygame'>
        <Icons>
          <AppsIcon fontSize='large' />
        </Icons>
      </RoomMemory>
  </Tooltip>
  )
};