import React from 'react';
import { Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { RoomClassroom, Icons } from './Styling';

export const Classroom = () => {
  return (
    <Tooltip title='CLASSROM! Solve mathematical problems and earn points!'>
      <RoomClassroom to='/classroom'>
        <Icons>
          <Icon className='fa fa-calculator' />
        </Icons>
      </RoomClassroom>
  </Tooltip>
  )
}