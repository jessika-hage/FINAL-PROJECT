import React from 'react';
import { Tooltip } from '@material-ui/core';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

import { RoomStore, Icons } from './Styling';

export const Store = () => {
  return (
    <Tooltip title='STORE!'>
      <RoomStore to='/store'>
        <Icons>
          <LocalGroceryStoreIcon fontSize='large' />
        </Icons>
      </RoomStore>
  </Tooltip>
  )
}