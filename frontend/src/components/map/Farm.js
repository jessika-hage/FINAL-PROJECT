import React from 'react';
import { Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { RoomFarm, Icons } from './Styling';

export const Farm = () => {
  return (
    <Tooltip title='FARM'>
      <RoomFarm to='/memorygame'>
        <Icons>
          <Icon className='fa fa-calculator' />
        </Icons>
      </RoomFarm>
    </Tooltip>
  )
};