import React from 'react';
import { Tooltip } from '@material-ui/core';

import { RoomStore, ShoppingIcon } from './Styling';

export const Store = () => {
  return (
    <Tooltip title='STORE!'>
      <RoomStore to='/store'>
          <ShoppingIcon />
      </RoomStore>
  </Tooltip>
  )
}